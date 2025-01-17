import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";

// Components for this view
import { BottomModuleForm } from "../../../components/admin/BottomModuleForm";

// Styles for this component
import "../../../assets/css/components/admin/modules/Forms.css";

// Error message component
import { ErrorMessageValidation } from "../../../components/company/auth/ErrorMessageValidation";

// React hook form
import { useForm } from "react-hook-form";

// Type
import { CustomerForm } from "../../../types/customer";

// Toast alert component
import { toast } from "sonner";

// API Axios config
import api from "../../../config/axios";

const NewCustomerView = () => {
    const initialValues = {
        name: "",
        description: ""
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm ({
        defaultValues: initialValues
    });

    // Redirect
    const navigate = useNavigate();

    const handleNewCustomer = async (formData: CustomerForm) => {
        try {
            const { data } = await api.post("/admin/customers/create", formData);

            // Clear form
            reset()

            // Redirection to customers view
            navigate("/admin/customers");

            // Sucess toast
            toast.success(data);
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                toast.error(error.response.data);
            }
        }
    }

    return (
        <main className="content-page--admin">
            <form action="" className="form-module font-inter" method="post" onSubmit={handleSubmit(handleNewCustomer)}>
                <h1>New customer</h1>
                <div className="group-form-module">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="font-inter"
                        id="name"
                        placeholder="Enter the name of the customer"
                        {...register("name", {
                            required: "The customer name is required.",
                            pattern: {
                                value: /^[a-zA-Z0-9áéíóúÁÉÍÓÚ\s-]+$/,
                                message: "Only letters, numbers, and dashes are allowed."
                            },
                            minLength: {
                                value: 3,
                                message: "Password must be at least 3 characters long."
                            }
                        })}
                    />
                    {errors.name && 
                        <ErrorMessageValidation>
                            {errors.name?.message}
                        </ErrorMessageValidation>
                    }
                </div>
                <div className="group-form-module">
                    <label htmlFor="name">Description:</label>
                    <textarea
                        className="font-inter"
                        id="description"
                        placeholder="Enter a description for the customer"
                        {...register("description", {
                            required: false,
                            pattern: {
                                value: /^[a-zA-Z0-9áéíóúÁÉÍÓÚ\s-]+$/,
                                message: "Only letters, numbers, and dashes are allowed."
                            }
                        })}
                    />
                    {errors.description && 
                        <ErrorMessageValidation>
                            {errors.description?.message}
                        </ErrorMessageValidation>
                    }
                </div>
            
                {/* Bottom buttons component */}
                <BottomModuleForm
                    hrefCancelBtn="/admin/customers"
                    txtBtnSubmit="Create customer"
                />
            </form>
        </main>
    )
}

export default NewCustomerView