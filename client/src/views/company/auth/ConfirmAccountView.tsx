import { useForm } from "react-hook-form";

// Styles
import "../../../../public/css/components/company/auth/Forms.css";

// Logo
import Logo from "../../../../public/img/Logo.png";

// Error form validation component
import { ErrorMessageValidation } from "../../../components/company/auth/ErrorMessageValidation";

// Type
import { ConfirmAccountForm } from "../../../types/auth";

const ConfirmAccountView = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ConfirmAccountForm> ({
        defaultValues: {
            token: undefined
        }
    })

    const handleConfirmAccount = async (formData: ConfirmAccountForm) => {
        console.log(formData)
    }

    return (
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
    )
}

export default ConfirmAccountView;