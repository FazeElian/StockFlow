import { Request, Response } from "express"

export class CategoryController {
    static getAll = async (req: Request, res: Response) => {
        res.send("All categories")
    }

    static getById = async (req: Request, res: Response) => {
        res.send("Category by Id")
    }

    static new = async (req: Request, res: Response) => {
        res.send("New category")
    }

    static updateById = async (req: Request, res: Response) => {
        res.send("Update category by id")
    }

    static deleteById = async (req: Request, res: Response) => {
        res.send("Delete category by id")
    }
}