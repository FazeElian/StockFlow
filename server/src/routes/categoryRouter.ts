import { Router } from "express";
import { body } from "express-validator";
import { CategoryController } from "../controllers/CategoryController";
import { handleInputErrors } from "../middleware/validation";

const router = Router()

router.get("/categories/", CategoryController.getAll)

router.post("/categories/create",
    body("name")
        .notEmpty().withMessage("The category name is required"),
    handleInputErrors,
    CategoryController.create
);

router.get("/categories/:id", CategoryController.getById)
router.put("/categories/:id", CategoryController.updateById)
router.delete("/categories/:id", CategoryController.deleteById)

export default router;