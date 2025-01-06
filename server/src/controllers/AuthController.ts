import { Request, Response } from 'express';
import User from '../models/User';
import { hashPassword } from '../utils/auth';
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

    }
}