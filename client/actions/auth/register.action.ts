"use server"

import { RegisterSchema } from "@/schemas"

export async function register(formData: FormData) {
    // Data from form
    const registerData = {
        userName: formData.get("userName"),
        email: formData.get("email"),
        password: formData.get("password"),
    }

    // Validation
    const register = RegisterSchema.safeParse(registerData);

    // const errors = register.error?.errors.map(error => error.message);
    if (!register.success) {
        return;
    }

    // New
    const url = `${process.env.API_URL}/auth/register`;
    const req = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userName: register.data.userName,
            email: register.data.email,
            password: register.data.password,
        })
    })

    const json = await req.json()
    console.log(json);
}