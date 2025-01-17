export type Category = {
    id: string,
    name: string,
    description: string
}

export type CategoryForm = Pick<Category, "name" | "description">;
export type EditCategoryForm = Category