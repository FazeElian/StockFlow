"use client";

import Image from 'next/image';

// Styles
import "@/public/css/components/company/Forms.css";

// Logo
import Logo from "@/public/img/Logo.png";

const ForgotPasswordView = () => {
    return (
        <main className="content-page--company">
        <section className="sect-form-users">
            <form action="" className="form-users bg-black-medium font-inter" method="post">
                <div className="top-form-users bg-transparent">
                    <Image
                        src={Logo}
                        className="bg-transparent"
                        alt=""
                        priority
                    />
                    <h2 className="color-gray bg-transparent">
                        Request a code to your email to reset your password.
                    </h2>
                </div>
                <div className="inputs-form-users bg-transparent">
                    <div className="group-form-users bg-transparent">
                        <label htmlFor="email" className="bg-transparent color-white">Email Address</label>
                        <input
                            type="email"
                            id=""
                            className="color-black bg-white font-inter"
                            placeholder="Enter the email associated with your account"
                        />
                    </div>

                    <button className="btn-submit-form-users bg-black-medium color-gray font-inter" type="submit">
                        Send Recovery code
                    </button>
                </div>
            </form>
        </section>
        </main>
    )
}

export default ForgotPasswordView;