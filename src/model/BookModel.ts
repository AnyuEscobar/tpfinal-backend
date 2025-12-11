import { Model, model, Schema } from "mongoose"
import IBook from "../interfaces/IBook"


const bookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: { type: Number },
  genre: { type: String, default: "Indefinido" },
  available: { type: Boolean, default: true }
}, {
  versionKey: false
})

bookSchema.index({ title: 1, author: 1 }, { unique: true });

const Book: Model<IBook> = model("Book", bookSchema)

export default Book