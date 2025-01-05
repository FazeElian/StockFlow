import { Request, Response } from "express"
import Category from "../models/Category"

export class CategoryController {
    static getAll = async (req: Request, res: Response) => {
        res.send("All categories")
    }

    static getById = async (req: Request, res: Response) => {
        res.send("Category by Id")
    }

    static create = async (req: Request, res: Response) => {
        try {
            const category = new Category(req.body);
            await category.save();
            res.status(201).send("Category created sucessfully");
        } catch (error) {
            res.status(500).json({ error: "Error creating the category" })
        }
    }

    static updateById = async (req: Request, res: Response) => {
        res.send("Update category by id")
    }

    static deleteById = async (req: Request, res: Response) => {
        res.send("Delete category by id")
    }
}