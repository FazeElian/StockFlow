import { Router } from "express";
import { AuthController } from "../controllers/AuthController";
import { body, param } from "express-validator";
import { handleInputErrors } from "../middleware/validation";

const router = Router()

router.post("/register",
    body("userName")
        .notEmpty().withMessage("Please enter a username.")
        .isLength({ min: 4 }).withMessage("Username must be at least 4 characters long."),
    body("email")
        .isEmail().withMessage("Please enter a valid email address.")
        .notEmpty().withMessage("Please enter an email address."),
    body("password")
        .isLength({ min: 8 }).withMessage("Password must be at least 8 characters long.")
        .notEmpty().withMessage("Please enter a password."),
    handleInputErrors,
    AuthController.register
);

router.post("/login",
    body("email")
        .isEmail().withMessage("Please enter a valid email address.")
        .notEmpty().withMessage("Email is required"),
    body("password")
        .notEmpty().withMessage("Password is required"),
    handleInputErrors,
    AuthController.login
);

router.post("/confirm-account",
    body("token")
        .notEmpty()
        .isLength({ min: 6, max: 6  })
        .withMessage("Token not valid"),
    handleInputErrors,
    AuthController.confirmAccount
);

router.post("/forgot-password",
    body("email")
        .isEmail().withMessage("Please enter a valid email address.")
        .notEmpty().withMessage("Email is required"),
    handleInputErrors,
    AuthController.forgotPassword
);

router.post("/validate-token", 
    body("token")
        .notEmpty()
        .isLength({ min: 6, max: 6  })
        .withMessage("Token not valid"),
    handleInputErrors,
    AuthController.validateToken
);

router.post("/reset-password/:token",
    param("token")
        .notEmpty()
        .isLength({ min: 6, max: 6  })
        .withMessage("Token not valid"),
    body("password")
        .isLength({ min: 8 }).withMessage("Password must be at least 8 characters long.")
        .notEmpty().withMessage("Please enter a password."),
    handleInputErrors,
    AuthController.resetPasswordWithToken
);

export default router;