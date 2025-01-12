import { useForm } from "react-hook-form";
import { isAxiosError } from "axios";
import { toast, Toaster } from "sonner";
import { useNavigate, useParams } from "react-router-dom";

// Styles
import "../../../assets/css/components/company/auth/Forms.css";

// Logo
import Logo from "../../../assets/img/Logo.png";

// Error form validation component
import { ErrorMessageValidation } from "../../../components/company/auth/ErrorMessageValidation";

// Type
import { ResetPasswordForm } from "../../../types/auth";

// API call
import api from "../../../config/axios";

const ResetPasswordView = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ResetPasswordForm> ({
        defaultValues: {
            password: "",
        }
    })

    // Get token with params
    const { token } = useParams<{ token: string }>();

    const navigate = useNavigate();

    const handleResetPassword = async (formData: ResetPasswordForm) => {
        try {
            const { data } = await api.post(`/auth/reset-password/${token}`, formData);
            reset();

            // Sucess message
            toast.success(data)

            // Redirection to home view
            setTimeout(() => {
                navigate("/");
            }, 8000)
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
                        method="post"
                        onSubmit={handleSubmit(handleResetPassword)}
                    >
                        <div className="top-form-users bg-transparent">
                            <img
                                src={Logo}
                                className="bg-transparent"
                                alt=""
                                loading="lazy"
                            />
                            <h2 className="color-gray bg-transparent">
                                Create a new password
                            </h2>
                        </div>
                        <div className="inputs-form-users bg-transparent">
                            <div className="group-form-users bg-transparent">
                                <label htmlFor="password" className="bg-transparent color-white">New Password</label>
                                <input
                                    type="password"
                                    id=""
                                    className="color-black bg-white font-inter"
                                    placeholder="Create a new password (at least 8 characters)"
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
                                Reset password
                            </button>
                        </div>
                    </form>
                </section>
            </main>

            <Toaster
                richColors
                position="top-center"
            />
        </>
    )
}

export default ResetPasswordView;