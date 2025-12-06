import { Router } from "express"
import BookController from "../controllers/bookController"
import authMiddleware from "../middleware/authMiddleware"


const bookRouter = Router()

bookRouter.get("/", BookController.getAllBooks)
bookRouter.get("/:id", BookController.getBook)
bookRouter.post("/", authMiddleware, BookController.addBook)
bookRouter.patch("/:id", authMiddleware, BookController.updateBook)
bookRouter.delete("/:id", authMiddleware, BookController.deleteBook)

export default bookRouter