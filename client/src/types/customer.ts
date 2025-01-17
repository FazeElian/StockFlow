export type Customer = {
    id: string,
    name: string,
    description: string
}

export type CustomerForm = Pick<Customer, "name" | "description">;
export type EditCustomerForm = Customer