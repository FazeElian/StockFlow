// Components for this view
import { BottomModuleForm } from "../../../components/admin/BottomModuleForm";

// Styles for this component
import "../../../assets/css/components/admin/modules/Forms.css";

// Error message component
import { ErrorMessageValidation } from "../../../components/company/auth/ErrorMessageValidation";
import { useForm } from "react-hook-form";
import { getCategoryById, updateCategory } from "../../../api/category";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { Category, CategoryForm } from "../../../types/category";
import { isAxiosError } from "axios";
import { toast } from "sonner";

const EditCategoryView = () => {
    // Get id from url param
    const { id: categoryId } = useParams<{ id: string }>();
    const navigate = useNavigate();

    // Getting category data with its id
    const { data: category, error, isLoading } = useQuery<Category>({
        queryKey: ["category", categoryId],
        queryFn: () => getCategoryById(categoryId!),
        retry: 1,
        refetchOnWindowFocus: false,
        staleTime: 30 * 10000
    })

    // Form config
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm<CategoryForm>({
        defaultValues: {
            name: "",
            description: ""
        }
    });

    // Mutation
    const mutation = useMutation({
        mutationFn: (formData: Category) => updateCategory(categoryId!, formData),
        onError: (error) => {
            if (isAxiosError(error) && error.response) {
                toast.error(error.response.data.error);
            } else {
                toast.error("Error updating category");
            }
        },
        onSuccess: (data) => {
            toast.success(data.message);
            navigate("/admin/categories");
        },
    });

    // Update function
    const handleUpdateCategory = (data: CategoryForm) => {
        mutation.mutate(data);
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading category</div>;
    }


    if (category) {
        setValue("name", category.name);
        setValue("description", category.description);
    }

    return (
        <main className="content-page--admin">
            <form
                action=""
                className="form-module font-inter"
                method="post"
                onSubmit={handleSubmit(handleUpdateCategory)}
            >
                <h1>Edit category</h1>
                <div className="group-form-module">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="font-inter"
                        id="name"
                        placeholder="Enter the name of the category"
                        {...register("name", {
                            required: "The category name is required.",
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
                        placeholder="Enter a description for the category"
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
                    hrefCancelBtn="/admin/categories"
                    txtBtnSubmit="Update category"
                />
            </form>
        </main>
    )
}

export default EditCategoryView