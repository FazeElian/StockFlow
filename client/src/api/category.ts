import { isAxiosError } from "axios";

// Axios config
import api from "../config/axios";

// Type
import { Category } from "../types/category";

export async function getAllCategories () {
    try {
        const { data } = await api<Category[]>("/admin/categories");
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function getCategoryById (id: string) {
    try {
        const { data } = await api.get(`/admin/categories/${id}`);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data);
        }
    }
}

export async function updateCategory (id: string, categoryData: Category) {
    try {
        const { data } = await api.put(`/admin/categories/${id}`, categoryData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}