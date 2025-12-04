import { Request, Response } from "express"
import bcrypt from "bcryptjs"
import User from "../model/UserModel"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const SECRET_KEY = process.env.JWT_SECRET!

class AuthController {
  static register = async (req: Request, res: Response): Promise<void | Response> => {
    try {
      const { email, password } = req.body
      if (!email || !password) {
        return res.status(400).json({ success: false, error: "Por favor completar los campos requeridos" })
      }
      const hash = await bcrypt.hash(password, 10)
      const newUser = new User({ email, password: hash })

      await newUser.save()
      res.status(200).json({ success: true, data: newUser })

    } catch (e) {
      const error = e as Error
      return res.status(409).json({ success: false, error: "Usuario ya registrado en nuestro servidor" })

    }
  }
  static login = async (req: Request, res: Response): Promise<void | Response> => {
    try {
      const { email, password } = req.body

      if (!email || !password) {
        return res.status(400).json({ success: false, error: "Datos inválidos" })
      }

      const user = await User.findOne({ email })

      if (!user) {
        return res.status(401).json({ success: false, error: "No autorizado" })
      }
      const isValid = await bcrypt.compare(password, user.password)

      if (!isValid) {
        return res.status(401).json({ success: false, error: "No autorizado" })
      }

      const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" })
      res.status(200).json({ success: true, token })

    } catch (e) {
      const error = e as Error
      res.status(500).json({ success: false, error: "Sucedió un error" })
    }
  }
}

export default AuthController