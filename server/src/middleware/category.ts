import { Request, Response, NextFunction } from 'express';
import { body, param, validationResult } from 'express-validator';
import Category from '../models/Category';

declare global {
    namespace Express {
        interface Request {
            category: Category
        }
    }
}

export const validateCategoryId = async (req: Request, res: Response, next: NextFunction) => {
    await param("categoryId")
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
        const { categoryId } = req.params;
        const category = await Category.findByPk(categoryId)

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

export const validateCategoryInput = async (req: Request, res: Response, next: NextFunction) => {
    await body("name")
        .notEmpty().withMessage("The category name is required")
        .run(req)
    
    next()
}

export const hasAccess = async (req: Request, res: Response, next: NextFunction) => {
    if(req.category.userId !== req.user.id) {
        const error = new Error("Not valid action");
        return res.status(401).json({ error: error.message });
    }    

    next();
}