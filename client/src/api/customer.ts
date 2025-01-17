import { isAxiosError } from "axios";

// Axios config
import api from "../config/axios";

// Type
import { Customer } from "../types/customer";

// Toast
import { toast } from "sonner";

export async function createCustomer (formData: Customer) {
    try {
        const { data } = await api.post("/admin/customers/create", formData);
        return toast.success(data);
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}