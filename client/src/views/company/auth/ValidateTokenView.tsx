import { useForm } from "react-hook-form";
import { isAxiosError } from "axios";
import { toast, Toaster } from "sonner";
import { useNavigate } from "react-router-dom";

// Styles
import "../../../assets/css/components/company/auth/Forms.css";

// Logo
import Logo from "../../../assets/img/Logo.png";

// Error form validation component
import { ErrorMessageValidation } from "../../../components/company/auth/ErrorMessageValidation";

// Type
import { ValidateCodeForm } from "../../../types/auth";

// API call
import api from "../../../config/axios";

const ValidateCodeView = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ValidateCodeForm>({
        defaultValues: {
            password: "",
        }
    })

    const navigate = useNavigate();

    const handleValidateCode = async (formData: ValidateCodeForm) => {
        try {
            const { data } = await api.post("/auth/validate-token", formData);
            reset();

            // Sucess message
            toast.success(data)

            // Redirection to set new password
            navigate(`/auth/reset-password/${formData.token}`)
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
                        onSubmit={handleSubmit(handleValidateCode)}
                    >
                        <div className="top-form-users bg-transparent">
                            <img
                                src={Logo}
                                className="bg-transparent"
                                alt=""
                                loading="lazy"
                            />
                            <h2 className="color-gray bg-transparent">
                                Enter the code sent to your email to reset your password
                            </h2>
                        </div>
                        <div className="inputs-form-users bg-transparent">
                            <div className="group-form-users bg-transparent">
                                <label htmlFor="token" className="bg-transparent color-white">Reset Code</label>
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
                                Send Recovery code
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

export default ValidateCodeView;