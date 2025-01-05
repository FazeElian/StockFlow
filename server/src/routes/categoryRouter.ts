import { Router } from "express";
import { body } from "express-validator";
import { CategoryController } from "../controllers/CategoryController";
import { handleInputErrors } from "../middleware/validation";
import { validateCategoryId, validateIfCategoryExists } from "../middleware/category";

const router = Router()
router.param("categoryId", validateCategoryId);
router.param("categoryId", validateIfCategoryExists);

router.get("/categories/", CategoryController.getAll)

router.post("/categories/create",
    body("name")
        .notEmpty().withMessage("The category name is required"),
    handleInputErrors,
    CategoryController.create
);

router.get("/categories/:categoryId",
    CategoryController.getById
);

router.put("/categories/:categoryId",
    body("name")
        .notEmpty().withMessage("The category name is required"),
    handleInputErrors,
    CategoryController.updateById
);

router.delete("/categories/:categoryId",
    CategoryController.deleteById
);

export default router;