import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 10,
    message: { "error": "You have exceeded the allowed number of requests. Please try again after 1 minute." },
});