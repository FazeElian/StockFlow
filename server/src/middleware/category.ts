import { Request, Response, NextFunction } from 'express';
import { param, validationResult } from 'express-validator';
import Category from '../models/Category';

declare global {
    namespace Express {
        interface Request {
            category: Category
        }
    }
}

export const validateCategoryId = async (req: Request, res: Response, next: NextFunction) => {
    await param("id")
        .isInt().withMessage("ID not valid")
        .custom(value => value > 0).withMessage("ID not valid")
        .run(req);

    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() })
        return;
    } else {
        next()
    }
}

export const validateIfCategoryExists = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const category = await Category.findByPk(id)

        if (!category) {
            const error = new Error("Category not found");
            res.status(404).json({ error: error.message });
            return;
        }
        req.category = category;

        next()
    } catch (error) {
        res.status(500).json({ error: "An error has ocurred" })
    }
}