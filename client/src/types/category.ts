export type Category = {
    name: string,
    description: string
}

export type CategoryForm = Pick<Category, "name" | "description">