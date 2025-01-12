import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";
import { toast, Toaster } from "sonner";

// Styles
import "../../../assets/css/components/company/auth/Forms.css";

// Logo
import Logo from "../../../assets/img/Logo.png";

// Error form validation component
import { ErrorMessageValidation } from "../../../components/company/auth/ErrorMessageValidation";

// Type
import { ConfirmAccountForm } from "../../../types/auth";

// API call
import api from "../../../config/axios";

const ConfirmAccountView = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ConfirmAccountForm> ({
        defaultValues: {
            token: undefined
        }
    })

    const navigate = useNavigate();

    const handleConfirmAccount = async (formData: ConfirmAccountForm) => {
        try {
            const { data } = await api.post("/auth/confirm-account", formData);
            reset();

            // Sucess message
            toast.success(data)

            setTimeout(() => {
                // Redirection to login form
                navigate("/auth/login");
            }, 2000)
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
                        onSubmit={handleSubmit(handleConfirmAccount)}
                    >
                        <div className="top-form-users bg-transparent">
                            <img
                                src={Logo}
                                className="bg-transparent"
                                alt=""
                                loading="lazy"
                            />
                            <h2 className="color-gray bg-transparent">
                                Confirm your account using the code sent to your email
                            </h2>
                        </div>
                        <div className="inputs-form-users bg-transparent">
                            <div className="group-form-users bg-transparent">
                                <label htmlFor="token" className="bg-transparent color-white">Confirmation Code</label>
                                <input
                                    type="text"
                                    id="token"
                                    className="color-black bg-white font-inter"
                                    placeholder="Enter the code sent to your email"
                                    {...register("token", {
                                        required: "Token not valid",
                                        minLength: {
                                            value: 6,
                                            message: "Token not valid"
                                        },
                                        maxLength: {
                                            value: 6,
                                            message: "Token not valid"
                                        }
                                    })}
                                />
                                {errors.token && 
                                    <ErrorMessageValidation>
                                        { errors.token?.message }
                                    </ErrorMessageValidation>
                                }
                            </div>

                            <button className="btn-submit-form-users bg-black-medium color-gray font-inter" type="submit">
                                Confirm Account
                            </button>
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

export default ConfirmAccountView;