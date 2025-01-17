import { isAxiosError } from "axios";

// Axios config
import api from "../config/axios";

// Type
import { Customer } from "../types/customer";

export async function getAllCustomers () {
    try {
        const { data } = await api<Customer[]>("/admin/customers");
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}