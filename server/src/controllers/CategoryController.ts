import { Request, Response } from "express"
import Category from "../models/Category"

export class CategoryController {
    static getAll = async (req: Request, res: Response) => {
        try {
            const categories = await Category.findAll({});
            res.json(categories)
        } catch (error) {
            res.status(500).json({ error: "Error getting the categories" })
        }
    }

    static getById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const category = await Category.findByPk(id);

            if (!category) {
                const error = new Error("Category not found");
                res.status(404).json({ error: error.message });
                return;
            }
            
            res.json(category);
        } catch (error) {
            res.status(500).json({ error: "Error getting the category by id" })
        }
    }

    static create = async (req: Request, res: Response) => {
        try {
            const category = new Category(req.body);
            if (category) {
                const error = new Error("The category already exists");
                res.status(404).json({ error: error.message });
                return;
            }

            await category.save();
            res.status(201).send("Category created sucessfully");
        } catch (error) {
            res.status(500).json({ error: "Error creating the category" })
        }
    }

    static updateById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const category = await Category.findByPk(id);

            if (!category) {
                const error = new Error("Category not found");
                res.status(404).json({ error: error.message });
                return;
            }

            // Update changes
            await category.update(req.body);

            res.json("Category updated sucessfully");
        } catch (error) {
            res.status(500).json({ error: "Error getting the category by id" })
        }
    }

    static deleteById = async (req: Request, res: Response) => {
        res.send("Delete category by id")
    }
}