import connectDB from "./config/mongodb"
import express, { Request, Response } from "express"
import cors from "cors"
import dotenv from "dotenv"
import bookRouter from "./routes/bookRoutes"
import authRouter from "./routes/authRoutes"
import IUserTokenPayload from "./interfaces/IUserTokenPayload"
import logger from "./config/logger"
import morgan from "morgan"

dotenv.config()

declare global {
  namespace Express {
    interface Request {
      user?: IUserTokenPayload
    }
  }
}
const PORT = process.env.PORT || 2000;

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger)
app.use(morgan("dev"))


app.get("/", (req: Request, res: Response) => {
  res.json({ status: true })
})

app.use("/auth", authRouter)
app.use("/books", bookRouter)

app.use((__, res) => {
  res.status(404).json({ success: false, error: "Algo falló" })
})

//servidor en escucha
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor en escucha en el puerto http://localhost:${PORT}`)
  })
})