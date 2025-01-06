import { transport } from './../config/nodemailer';

type EmailType = {
    userName: string,
    email: string,
    token: string
}

export class AuthEmail {
    static sendConfirmationEmail = async (user: EmailType) => {
        const email = await transport.sendMail({
            from: "StockFlow",
            to: user.email,
            subject: "StockFlow - Confirm your account",
            html: `
                <h2> Hi ${user.userName}, </h2>
                <br />

                <h2>Welcome to StockFlow! Please confirm your email address to activate your account.</h2>
                <p>Click the link below and enter the code to complete your registration: </p>
                <br />

                <p><b>Code: </b> ${user.token} </p>
                <a href="#"> Confirm my account </a>
            `
        })
        console.log(email)
    }

    static sendForgotPasswordEmail = async (user: EmailType) => {
        const email = await transport.sendMail({
            from: "StockFlow",
            to: user.email,
            subject: "StockFlow - Reset your password",
            html: `
                <h2> Hi ${user.userName}, </h2>
                <br />

                <h2>You recently requested to reset your password for your StockFlow account. Use the code below to reset it:</h2>
                <br />

                <p><b>Code: </b> ${user.token} </p>
                <a href="#"> Reset my password </a>
            `
        })
        console.log(email)
    }
}