import { Router } from "express";
import { CustomerController } from "../controllers/CustomerController";
import { handleInputErrors } from "../middleware/validation";
import { authenticate } from "../middleware/auth";
import {
    hasAccess,
    validateCustomerId,
    validateCustomerInput,
    validateIfCustomerExists
} from "../middleware/customer";

const router = Router()

router.param("customerId", validateCustomerId);
router.param("customerId", validateIfCustomerExists);
router.param("customerId", authenticate);
router.param("customerId", hasAccess);

// Get all customers
router.get("/customers/",
    authenticate,
    CustomerController.getAll
);

// New customer
router.post("/customers/create",
    validateCustomerInput,
    handleInputErrors,
    authenticate,
    CustomerController.create
);


export default router;