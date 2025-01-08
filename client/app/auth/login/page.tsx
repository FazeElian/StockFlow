"use client";

import Link from "next/link"
import Image from 'next/image';

// Styles
import "@/public/css/components/company/Forms.css";

// Logo
import Logo from "@/public/img/Logo.png";

const RegisterView = () => {
    return (
        <main className="content-page--company">
            <section className="sect-form-users">
                <form action="" className="form-users bg-black-medium font-inter" method="POST">
                    <div className="top-form-users bg-transparent">
                        <Image
                            src={Logo}
                            className="bg-transparent"
                            alt=""
                            priority
                        />
                        <h2 className="color-gray bg-transparent">
                            Enter your credentials to access your account
                        </h2>
                    </div>
                    <div className="inputs-form-users bg-transparent">
                        <div className="group-form-users bg-transparent">
                            <label htmlFor="email" className="bg-transparent color-white">Email</label>
                            <input
                                type="text"
                                id=""
                                className="color-black bg-white font-inter"
                                placeholder="Enter your email address"
                            />
                        </div>
                        <div className="group-form-users bg-transparent">
                            <label htmlFor="password" className="bg-transparent color-white">Password</label>
                            <input
                                type="password"
                                id=""
                                className="color-black bg-white font-inter"
                                placeholder="Enter your password"
                            />
                            <Link href="/auth/forgot-password" className="color-white bg-transparent">
                                Forgot your password?
                            </Link>
                        </div>

                        <button className="btn-submit-form-users bg-black-medium color-gray font-inter" type="submit">
                            Create my Account
                        </button>

                        <Link href="/auth/login" className="color-white bg-transparent">
                            Don&apos;t have an account? Sign Up
                        </Link>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default RegisterView