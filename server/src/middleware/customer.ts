import { Request, Response, NextFunction } from 'express';
import { body, param, validationResult } from 'express-validator';
import Customer from '../models/Customer';

declare global {
    namespace Express {
        interface Request {
            customer: Customer
        }
    }
}

export const validateCustomerId = async (req: Request, res: Response, next: NextFunction) => {
    await param("customerId")
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

export const validateIfCustomerExists = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { customerId } = req.params;
        const customer = await Customer.findByPk(customerId)

        if (!customer) {
            const error = new Error("Customer not found");
            res.status(404).json({ error: error.message });
            return;
        }
        req.customer = customer;

        next()
    } catch (error) {
        res.status(500).json({ error: "An error has ocurred" })
    }
}

export const validateCustomerInput = async (req: Request, res: Response, next: NextFunction) => {
    await body("name")
        .notEmpty().withMessage("The customer name is required")
        .run(req)
    
    next()
}

export const hasAccess = async (req: Request, res: Response, next: NextFunction) => {
    if(req.customer.userId !== req.user.id) {
        const error = new Error("Not valid action");
        return res.status(401).json({ error: error.message });
    }    

    next();
}