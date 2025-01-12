import { Link } from "react-router-dom"

// Styles
import "../../../../public/css/components/company/auth/Forms.css";

// Logo
import Logo from "../../../../public/img/Logo.png";

const LoginView = () => {
    return (
        <main className="content-page--company">
            <section className="sect-form-users">
                <form action="" className="form-users bg-black-medium font-inter" method="POST">
                    <div className="top-form-users bg-transparent">
                        <img
                            src={Logo}
                            className="bg-transparent"
                            alt=""
                            loading="lazy"
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
                            <Link to="/auth/forgot-password" className="color-white bg-transparent">
                                Forgot your password?
                            </Link>
                        </div>

                        <button className="btn-submit-form-users bg-black-medium color-gray font-inter" type="submit">
                            Login
                        </button>

                        <Link to="/auth/register" className="color-white bg-transparent">
                            Don't have an account? Sign Up
                        </Link>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default LoginView