
import { Request, Response, NextFunction } from 'express';
import User from '../models/User';
import jwt from 'jsonwebtoken';

declare global {
    namespace Express {
        interface Request {
            user?: User
        }
    }
}

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    const bearer = req.headers.authorization;

    if(!bearer) {
        const error = new Error("Not authorized");
        res.status(401).json({ error: error.message });
        return;
    }

    const [ , token] = bearer.split(" ");
    if(!token) {
        const error = new Error("Token not valid");
        res.status(401).json({ error: error.message });
        return;
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(typeof decoded === "object" && decoded.id){
            req.user = await User.findByPk(decoded.id, {
                attributes: ["id", "userName", "email", "name", "lastName", "profilePhoto"]
            });
            next();
        }
    } catch (error) {
        res.status(500).json({ error: "Token not valid" })
    }
}