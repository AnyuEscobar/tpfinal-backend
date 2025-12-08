import { Router } from "express"
import AuthController from "../controllers/authController"
import limiter from "../middleware/rateLimitMiddleware"

const authRouter = Router()

authRouter.post("/register", limiter, AuthController.register)
authRouter.post("/login", limiter, AuthController.login)

export default authRouter