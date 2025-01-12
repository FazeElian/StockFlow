export type User = {
    userName: string,
    email: string,
    name: string,
    lastName: string,
    profilePhoto: string,
    token: number,
}

export type RegisterForm = Pick<User, "userName" | "email"> & {
    password: string,
}

export type LoginForm = Pick<User, "email"> & {
    password: string,
}

export type ForgotPasswordForm = Pick<User, "email">;
export type ConfirmAccountForm = Pick<User, "token">;

export type ResetPasswordForm = Pick<User, "token"> & {
    password: string
}

export type ValidateCodeForm = Pick<User, "token"> & {
    password: string
}