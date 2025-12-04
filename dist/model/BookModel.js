"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var bookSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedYear: { type: Number, required: true },
    genre: { type: String, default: "Indefinido" },
    available: { type: Boolean, default: true }
}, {
    versionKey: false
});
var Book = (0, mongoose_1.model)("Book", bookSchema);
exports.default = Book;
