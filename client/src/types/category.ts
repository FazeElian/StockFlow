export type Category = {
    id: number,
    name: string,
    description: string
}

export type CategoryForm = Pick<Category, "name" | "description">