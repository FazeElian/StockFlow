"use server"

import { RegisterSchema } from "@/schemas"

export async function register(userData: FormData) {
    // Data from form
    const registerData = {
        username: userData.get("username"),
        email: userData.get("email"),
        password: userData.get("password"),
    }

    // Validation
    const register = RegisterSchema.safeParse(registerData);

    const errors = register.error?.errors.map(error => error.message);
    console.log(errors)

    // New
    console.log(register)
}