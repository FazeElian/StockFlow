import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import { isAxiosError } from "axios";

// Styles
import "../../../assets/css/components/company/auth/Forms.css";

// Logo
import Logo from "../../../assets/img/Logo.png";

// Error form validation component
import { ErrorMessageValidation } from "../../../components/company/auth/ErrorMessageValidation";

// Type
import { LoginForm } from "../../../types/auth";

// API call
import api from "../../../config/axios";

const LoginView = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<LoginForm> ({
        defaultValues: {
            email: "",
            password: ""     
        }
    })

    const navigate = useNavigate();

    const handleLogin = async (formData: LoginForm) => {
        try {
            const { data } = await api.post("/auth/login", formData);

            // Save JWT on localStorage
            localStorage.setItem("AUTH_TOKEN", data);

            reset();

            // Sucess message
            toast.success(data)

            // Redirection to admin dashboard
            navigate("/admin/dashboard");
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                toast.error(error.response.data.error);
            }
        }
    }

    return (
        <>
            <main className="content-page--company">
                <section className="sect-form-users">
                    <form
                        action=""
                        className="form-users bg-black-medium font-inter"
                        method="POST"
                        onSubmit={handleSubmit(handleLogin)}
                    >
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
                                    {...register("email", {
                                        required: "Email is required",
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
                                    placeholder="Enter your password"
                                    {...register("password", {
                                        required: "Password is required",
                                    })}
                                />
                                {errors.password && 
                                    <ErrorMessageValidation>
                                        { errors.password?.message }
                                    </ErrorMessageValidation>
                                }

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

            <Toaster
                richColors
                position="bottom-right"
            />
        </>
    )
}

export default LoginView