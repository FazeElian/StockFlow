import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 5,
    message: { "error": "You have exceeded the allowed number of requests. Please try again after 5 minutes." },
});