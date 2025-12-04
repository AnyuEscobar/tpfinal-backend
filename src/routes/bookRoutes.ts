import { Router } from "express"
import BookController from "../controllers/bookController"


const bookRouter = Router()

bookRouter.get("/", BookController.getAllBooks)
bookRouter.get("/:id", BookController.getBook)
bookRouter.post("/", BookController.addBook)
bookRouter.patch("/:id", BookController.updateBook)
bookRouter.delete("/:id", BookController.deleteBook)

export default bookRouter