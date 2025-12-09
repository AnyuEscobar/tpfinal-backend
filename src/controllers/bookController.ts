import { Request, Response } from "express";
import Book from "../model/BookModel";
import { Types } from "mongoose";


//endpoint get que muestra todos los libros
class BookController {
  static getAllBooks = async (req: Request, res: Response): Promise<void | Response> => {
    try {

      //query params
      const { genre, title, author, minYear, maxYear } = req.query

      const filters: any = {};

      if (genre) filters.genre = { $regex: genre, $options: "i" }
      if (title) filters.title = { $regex: title, $options: "i" };
      if (author) filters.author = { $regex: author, $options: "i" }

      if (minYear || maxYear) {
        filters.publishedYear = {};
        if (minYear) filters.publishedYear.$gte = Number(minYear);
        if (maxYear) filters.publishedYear.$lte = Number(maxYear);
      }


      const books = await Book.find(filters)
      res.status(200).json({ success: true, data: books })
    } catch (e) {
      const error = e as Error
      res.status(500).json({ success: false, error: error.message })
    }
  }
  // endpoint get para mostrar los libros por id
  static getBook = async (req: Request, res: Response): Promise<void | Response> => {

    try {
      const { id } = req.params

      if (!Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, error: "ID Inválido" })
      }
      const book = await Book.findById(id)

      if (!book) {
        return res.status(404).json({ success: false, error: "Libro no encontrado" })
      }
      res.status(200).json({ success: true, data: book })
    } catch (e) {
      const error = e as Error
      res.status(500).json({ success: false, error: error.message })
    }
  }

  //endpoint post para agregar un libro
  static addBook = async (req: Request, res: Response): Promise<void | Response> => {
    try {
      const { body } = req

      const { title, author, publishedYear, genre, available } = body

      const existingBook = await Book.findOne({ title, author });

      if (existingBook) {
        return res.status(400).json({ sucess: false, error: "El libro ya existe en nuestra base de datos" })
      }

      if (!title || !author) {
        return res.status(400).json({ message: "Por favor completar los datos" })
      }
      const newBook = new Book({ title, author, publishedYear, genre, available })
      await newBook.save()
      res.status(201).json(newBook)
    } catch (e) {
      const error = e as Error
      res.status(500).json({ error: error.message })

    }
  }
  static updateBook = async (req: Request, res: Response): Promise<void | Response> => {

    try {
      const { id } = req.params;
      const { body } = req;

      if (!Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, error: "ID Inválido" });
      }

      const { title, author, publishedYear, genre, available } = body;

      const updates = { title, author, publishedYear, genre, available };

      const updatedBook = await Book.findByIdAndUpdate(id, updates, { new: true });

      if (!updatedBook) {
        return res.status(404).json({ success: false, error: "Libro no encontrado" });
      }

      return res.status(200).json({ success: true, data: updatedBook });

    } catch (e) {
      const error = e as Error;
      return res.status(500).json({ success: false, error: error.message });
    }

  }
  //endpoint delete para borrar un libro por su id
  static deleteBook = async (req: Request, res: Response): Promise<void | Response> => {
    try {
      const { id } = req.params

      if (!Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, error: "ID Inválido" });
      }

      const deletedBook = await Book.findByIdAndDelete(id)

      if (!deletedBook) {
        return res.status(404).json({ success: false, error: "Libro no encontrado" })
      }
      res.status(200).json({ success: true, data: deletedBook })
    }
    catch (e) {
      const error = e as Error
      res.status(500).json({ error: error.message })
    }
  }
}

export default BookController
