import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController";
import { handleInputErrors } from "../middleware/validation";
import { authenticate } from "../middleware/auth";
import {
    validateCategoryId,
    validateCategoryInput,
    validateIfCategoryExists
} from "../middleware/category";

const router = Router()

router.param("categoryId", validateCategoryId);
router.param("categoryId", validateIfCategoryExists);

// Get all categories
router.get("/categories/",
    authenticate,
    CategoryController.getAll
);

// New category
router.post("/categories/create",
    validateCategoryInput,
    handleInputErrors,
    authenticate,
    CategoryController.create
);

// Get category by id
router.get("/categories/:categoryId",
    authenticate,
    CategoryController.getById
);

// Update category by id
router.put("/categories/:categoryId",
    validateCategoryInput,
    handleInputErrors,
    authenticate,
    CategoryController.updateById
);

// Delete category by id
router.delete("/categories/:categoryId",
    authenticate,
    CategoryController.deleteById
);

export default router;