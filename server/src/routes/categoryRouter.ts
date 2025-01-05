import { Router } from "express";
import { body } from "express-validator";
import { CategoryController } from "../controllers/CategoryController";
import { handleInputErrors } from "../middleware/validation";
import { validateCategoryId, validateIfCategoryExists } from "../middleware/category";

const router = Router()

router.get("/categories/", CategoryController.getAll)

router.post("/categories/create",
    body("name")
        .notEmpty().withMessage("The category name is required"),
    handleInputErrors,
    CategoryController.create
);

router.get("/categories/:id",
    validateCategoryId,
    validateIfCategoryExists,
    CategoryController.getById
);

router.put("/categories/:id",
    validateCategoryId,
    validateIfCategoryExists,
    body("name")
        .notEmpty().withMessage("The category name is required"),
    handleInputErrors,
    CategoryController.updateById
);

router.delete("/categories/:id",
    validateCategoryId,
    validateIfCategoryExists,
    CategoryController.deleteById
);

export default router;