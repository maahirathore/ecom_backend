import rateLimiter from "express-rate-limit";
const rateLimit=rateLimiter({
    windowMs:5*60*1000,
    max:10
})
export default rateLimit