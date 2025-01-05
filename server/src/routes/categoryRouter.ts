import { Router } from "express";
import { body, param } from "express-validator";
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

router.get("/categories/:id",
    param("id").isInt().withMessage("ID not valid")
        .custom(value => value > 0).withMessage("ID not valid"),
    handleInputErrors,
    CategoryController.getById
);
router.put("/categories/:id",
    param("id").isInt().withMessage("ID not valid")
        .custom(value => value > 0).withMessage("ID not valid"),
    body("name")
        .notEmpty().withMessage("The category name is required"),
    handleInputErrors,
    CategoryController.updateById
);

router.delete("/categories/:id",
    param("id").isInt().withMessage("ID not valid")
        .custom(value => value > 0).withMessage("ID not valid"),
    handleInputErrors,
    CategoryController.deleteById
);

export default router;