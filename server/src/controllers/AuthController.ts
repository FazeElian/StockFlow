import { Request, Response } from 'express';
import User from '../models/User';
import { checkPassword, hashPassword } from '../utils/auth';
import { generateToken } from '../utils/token';
import { AuthEmail } from '../emails/AuthEmail';
import { generateJWT } from '../utils/jwt';
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

            res.status(201).json("Your account has been successfully created.");
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

        const token = generateJWT(user.id)

        // res.status(200).json("You have logged in successfully.");
        res.send(token);
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

    static forgotPassword = async (req: Request, res: Response) => {
        const { email } = req.body;

        // Check if the user already exists
        const user = await User.findOne({ where: { email } });

        if(!user) {
            const error = new Error("We couldn’t find an account associated with the email address you entered. Please check and try again.");
            res.status(404).json({ error: error.message });
            return;
        }

        user.token = generateToken();
        await user.save();
        await AuthEmail.sendForgotPasswordEmail({
            email: user.email,
            userName: user.userName,
            token: user.token
        });

        res.status(200).json("Great! We’ve sent you a password reset email. Check your inbox and follow the steps to reset your password.")
    }

    static validateToken = async (req: Request, res: Response) => {
        const { token } = req.body;

        // Check if the token exists
        const existingToken = await User.findOne({ where: { token } });
        if(!existingToken) {
            const error = new Error("Token not valid");
            res.status(404).json({ error: error.message });
            return;
        }

        res.status(200).json("The code was successfully verified. You can now set your new password.");
    }

    static resetPasswordWithToken = async (req: Request, res: Response) => {
        const { token } = req.params;
        const { password } = req.body;

        // Check if the token exists
        const user = await User.findOne({ where: { token } });
        if(!user) {
            const error = new Error("Token not valid");
            res.status(404).json({ error: error.message });
            return;
        }

        // New password
        user.password = await hashPassword(password);
        user.token = null;

        await user.save();

        res.status(200).json("Your password has been successfully reset. You can now log in with your new password.");
    }

    static getUser = async (req: Request, res: Response) => {
        res.json(req.user);
    }

    static updatePassword = async (req: Request, res: Response) => {
        const { currentPassword, newPassword } = req.body;
        const { id } = req.user;

        const user = await User.findByPk(id);

        const isPasswordCorrect = await checkPassword(currentPassword, user.password);
        if (!isPasswordCorrect) {
            const error = new Error("The current password you entered is incorrect");
            res.status(401).json({ error: error.message });
            return;
        }

        user.password = await hashPassword(newPassword)
        await user.save();

        res.status(200).json("Password updated successfully");
    }
}