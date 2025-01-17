import { Request, Response } from "express"
import Customer from "../models/Customer";

export class CustomerController {
    static getAll = async (req: Request, res: Response) => {
        try {
            const userId = req.user.id;
            const categories = await Customer.findAll({ where: { userId: userId } });
            res.json(categories)
        } catch (error) {
            res.status(500).json({ error: "Error getting the categories" })
        }
    }

    static create = async (req: Request, res: Response) => {
        try {
            const { name, description } = req.body;
            const userId = req.user.id;

            const existingCustomer = await Customer.findOne({ where: { name, userId } });
            if (existingCustomer) {
                const error = new Error("The customer already exists");
                res.status(404).json({ error: error.message });
                return;
            }
            
            const customer = new Customer({ name, description });
            customer.userId = req.user.id;
            await customer.save();

            res.status(201).send("Customer created sucessfully");
        } catch (error) {
            res.status(500).json({ error: "Error creating the customer" })
        }
    }
}