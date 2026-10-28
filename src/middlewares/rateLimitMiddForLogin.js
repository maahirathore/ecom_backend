import rateLimiter from "express-rate-limit";
const rateLimit=rateLimiter({
    windowMs:1*30*1000,
    max:5
})
export default rateLimit