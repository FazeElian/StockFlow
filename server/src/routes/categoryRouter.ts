import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController";

const router = Router()

router.get("/categories/", CategoryController.getAll)
router.post("/categories/create", CategoryController.create)
router.get("/categories/:id", CategoryController.getById)
router.put("/categories/:id", CategoryController.updateById)
router.delete("/categories/:id", CategoryController.deleteById)

export default router;