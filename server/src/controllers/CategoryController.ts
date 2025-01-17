import { Request, Response } from "express"
import Category from "../models/Category"

export class CategoryController {
    static getAll = async (req: Request, res: Response) => {
        try {
            const userId = req.user.id;
            const categories = await Category.findAll({ where: { userId: userId } });
            res.json(categories)
        } catch (error) {
            res.status(500).json({ error: "Error getting the categories" })
        }
    }

    static getById = async (req: Request, res:  Response) => {
        res.json(req.category);
    }

    static create = async (req: Request, res: Response) => {
        try {
            const { name, description } = req.body;
            const userId = req.user.id;

            const existingCategory = await Category.findOne({ where: { name, userId } });
            if (existingCategory) {
                const error = new Error("The category already exists");
                res.status(404).json({ error: error.message });
                return;
            }
            
            const category = new Category({ name, description });
            category.userId = req.user.id;
            await category.save();

            res.status(201).send("Category created sucessfully");
        } catch (error) {
            res.status(500).json({ error: "Error creating the category" })
        }
    }

    static updateById = async (req: Request, res: Response) => {
        // Update changes
        await req.category.update(req.body);

        res.json("Category updated sucessfully");
    }

    static deleteById = async (req: Request, res: Response) => {
            // Delete
            await req.category.destroy()

            res.json("Category deleted sucessfully");
    }
}