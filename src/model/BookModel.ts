import { Model, model, Schema } from "mongoose"
import IBook from "../interfaces/IBook"


const bookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: { type: Number, required: true },
  genre: { type: String, default: "Indefinido" },
  available: { type: Boolean, default: true }
}, {
  versionKey: false
})

const Book: Model<IBook> = model("Book", bookSchema)

export default Book