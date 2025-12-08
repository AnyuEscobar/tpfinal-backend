import rateLimit from "express-rate-limit"
import { Request, Response, NextFunction } from "express"

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  limit: 5,
  handler: (req: Request, res: Response, next: NextFunction, options) => {
    res.status(429).json({
      success: false,
      error: `Limite alcanzado ${options.limit} solicitudes cada ${options.windowMs / 1000 / 60} minutos`
    })
  }
})

export default limiter