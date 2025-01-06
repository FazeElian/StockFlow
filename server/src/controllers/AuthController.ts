import { Request, Response } from 'express';
import User from '../models/User';
import { checkPassword, hashPassword } from '../utils/auth';
import { generateToken } from '../utils/token';
import { AuthEmail } from '../emails/AuthEmail';

export class AuthController {
    static register = async (req: Request, res: Response) => {
        const { email, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ where: { email } });

        if(existingUser) {
            const error = new Error("This email is already associated with another account.");
            res.status(409).json({ error: error.message });
            return;
        }       

        try {
            const user = new User(req.body);
            user.password = await hashPassword(password)
            user.token = generateToken()
            await user.save();

            await AuthEmail.sendConfirmationEmail({
                userName: user.userName,
                email: user.email,
                token: user.token
            })

            res.status(201).send("Your account has been successfully created.");
        } catch (error) {
            res.status(500).json({ error: "Error creating the user" })
        }
    }

    static login = async (req: Request, res: Response) => {
        const { email, password } = req.body;

        // Check if the user already exists
        const user = await User.findOne({ where: { email } });

        if(!user) {
            const error = new Error("We couldn’t find an account with the provided details. Please check and try again.");
            res.status(404).json({ error: error.message });
            return;
        }

        // Check if the account has been confirmed
        if (!user.confirmed) {
            const error = new Error("Your account has not been verified yet. Please check your email to confirm your account.");
            res.status(403).json({ error: error.message });
            return;
        }

        const isPasswordCorrect = await checkPassword(password, user.password);
        if(!isPasswordCorrect) {
            const error = new Error("Please check your password and try again.");
            res.status(401).json({ error: error.message });
            return;
        }

        res.status(200).json("You have logged in successfully.");
    }

    static confirmAccount = async (req: Request, res: Response) => {
        const { token } = req.body;

        const user = await User.findOne({ where: { token } })
        if (!user) {
            const error = new Error("Token not valid");
            res.status(409).json({ error: error.message });
            return;
        }

        user.confirmed = true;
        user.token = null;
        await user.save();

        res.status(200).json("Thank you for verifying your email! Your account is now activated.");
    }
}