import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController";
import { handleInputErrors } from "../middleware/validation";
import {
    validateCategoryId,
    validateCategoryInput,
    validateIfCategoryExists
} from "../middleware/category";

const router = Router()

router.param("categoryId", validateCategoryId);
router.param("categoryId", validateIfCategoryExists);

// Get all categories
router.get("/categories/", CategoryController.getAll)

// New category
router.post("/categories/create",
    validateCategoryInput,
    handleInputErrors,
    CategoryController.create
);

// Get category by id
router.get("/categories/:categoryId",
    CategoryController.getById
);

// Update category by id
router.put("/categories/:categoryId",
    validateCategoryInput,
    handleInputErrors,
    CategoryController.updateById
);

// Delete category by id
router.delete("/categories/:categoryId",
    CategoryController.deleteById
);

export default router;