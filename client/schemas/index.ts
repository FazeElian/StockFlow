import { z } from "zod";

export const RegisterSchema = z.object({
    username: z.string()
        .min(1, { message: "Please enter a username." })
        .min(4, { message: "Username must be at least 4 characters long." }),
    email: z.string()
        .min(1, { message: "Please enter an email address." })
        .email({ message: "Please enter a valid email address." }),
    password: z.string()
        .min(1, { message: "Please enter a password." })
        .min(8, { message: "Password must be at least 8 characters long." }),
})