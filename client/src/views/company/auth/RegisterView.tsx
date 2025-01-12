import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";

// Styles
import "../../../../public/css/components/company/auth/Forms.css";

// Logo
import Logo from "../../../../public/img/Logo.png";

// Error form validation component
import { ErrorMessageValidation } from "../../../components/company/auth/ErrorMessageValidation";

// Type
import { RegisterForm } from "../../../types/auth";

const RegisterView = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterForm> ({
        defaultValues: {
            userName: "",
            email: "",
            password: ""     
        }
    })

    const handleRegister = async (formData: RegisterForm) => {
        console.log(formData)
    }

    return (
        <main className="content-page--company">
            <section className="sect-form-users">
                <form
                    action=""
                    className="form-users bg-black-medium font-inter"
                    method="POST"
                    onSubmit={handleSubmit(handleRegister)}
                >
                    <div className="top-form-users bg-transparent">
                        <img
                            src={Logo}
                            className="bg-transparent"
                            alt=""
                            loading="lazy"
                        />
                        <h2 className="color-gray bg-transparent">
                            Complete the form to create your account
                        </h2>
                    </div>
                    <div className="inputs-form-users bg-transparent">
                        <div className="group-form-users bg-transparent">
                            <label htmlFor="userName" className="bg-transparent color-white">Username</label>
                            <input
                                type="text"
                                id=""
                                className="color-black bg-white font-inter"
                                placeholder="Enter a username"
                                {...register("userName", {
                                    required: "Please enter a username.",
                                    minLength: {
                                        value: 4,
                                        message: "Username must be at least 4 characters long."
                                    }
                                })}
                            />
                            {errors.userName && 
                                <ErrorMessageValidation>
                                    { errors.userName?.message }
                                </ErrorMessageValidation>
                            }
                        </div>
                        <div className="group-form-users bg-transparent">
                            <label htmlFor="email" className="bg-transparent color-white">Email</label>
                            <input
                                type="text"
                                id=""
                                className="color-black bg-white font-inter"
                                placeholder="Enter your email address"
                                {...register("email", {
                                    required: "Please enter an email address.",
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Please enter a valid email address."
                                    }
                                })}
                            />
                            {errors.email && 
                                <ErrorMessageValidation>
                                    { errors.email?.message }
                                </ErrorMessageValidation>
                            }
                        </div>
                        <div className="group-form-users bg-transparent">
                            <label htmlFor="password" className="bg-transparent color-white">Password</label>
                            <input
                                type="password"
                                id=""
                                className="color-black bg-white font-inter"
                                placeholder="Create a password (at least 8 characters)"
                                {...register("password", {
                                    required: "Please enter a password.",
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters long."
                                    }
                                })}
                            />
                            {errors.password && 
                                <ErrorMessageValidation>
                                    { errors.password?.message }
                                </ErrorMessageValidation>
                            }
                        </div>

                        <button className="btn-submit-form-users bg-black-medium color-gray font-inter" type="submit">
                            Create my Account
                        </button>

                        <Link to="/auth/login" className="color-white bg-transparent">
                            Already have an account? Log In
                        </Link>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default RegisterView