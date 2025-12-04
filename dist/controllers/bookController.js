"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BookModel_1 = __importDefault(require("../model/BookModel"));
var mongoose_1 = require("mongoose");
//endpoint get que muestra todos los libros
var BookController = /** @class */ (function () {
    function BookController() {
    }
    var _a;
    _a = BookController;
    BookController.getAllBooks = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var books, e_1, error;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, BookModel_1.default.find()];
                case 1:
                    books = _b.sent();
                    res.status(200).json({ success: true, data: books });
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _b.sent();
                    error = e_1;
                    res.status(500).json({ success: false, error: error.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    // endpoint get para mostrar los libros por id
    BookController.getBook = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, book, e_2, error;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    id = req.params.id;
                    if (!mongoose_1.Types.ObjectId.isValid(id)) {
                        return [2 /*return*/, res.status(400).json({ success: false, error: "ID Inválido" })];
                    }
                    return [4 /*yield*/, BookModel_1.default.findById(id)];
                case 1:
                    book = _b.sent();
                    if (!book) {
                        return [2 /*return*/, res.status(404).json({ success: false, error: "Libro no encontrado" })];
                    }
                    res.status(200).json({ success: true, data: book });
                    return [3 /*break*/, 3];
                case 2:
                    e_2 = _b.sent();
                    error = e_2;
                    res.status(500).json({ success: false, error: error.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    //endpoint post para agregar un libro
    BookController.addBook = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var body, title, author, publishedYear, genre, available, newBook, e_3, error;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    body = req.body;
                    title = body.title, author = body.author, publishedYear = body.publishedYear, genre = body.genre, available = body.available;
                    if (!title || !author || !publishedYear || !genre || !available) {
                        return [2 /*return*/, res.status(400).json({ message: "Por favor completar todos los datos" })];
                    }
                    newBook = new BookModel_1.default({ title: title, author: author, publishedYear: publishedYear, genre: genre, available: available });
                    return [4 /*yield*/, newBook.save()];
                case 1:
                    _b.sent();
                    res.status(201).json(newBook);
                    return [3 /*break*/, 3];
                case 2:
                    e_3 = _b.sent();
                    error = e_3;
                    res.status(500).json({ error: error.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    BookController.updateBook = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, body, title, author, publishedYear, genre, available, updates, updatedBook, e_4, error;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    id = req.params.id;
                    body = req.body;
                    if (!mongoose_1.Types.ObjectId.isValid(id)) {
                        return [2 /*return*/, res.status(400).json({ success: false, error: "ID Inválido" })];
                    }
                    title = body.title, author = body.author, publishedYear = body.publishedYear, genre = body.genre, available = body.available;
                    updates = { title: title, author: author, publishedYear: publishedYear, genre: genre, available: available };
                    return [4 /*yield*/, BookModel_1.default.findByIdAndUpdate(id, updates, { new: true })];
                case 1:
                    updatedBook = _b.sent();
                    if (!updatedBook) {
                        return [2 /*return*/, res.status(404).json({ success: false, error: "Libro no encontrado" })];
                    }
                    return [2 /*return*/, res.status(200).json({ success: true, data: updatedBook })];
                case 2:
                    e_4 = _b.sent();
                    error = e_4;
                    return [2 /*return*/, res.status(500).json({ success: false, error: error.message })];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    //endpoint delete para borrar un libro por su id
    BookController.deleteBook = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, deletedBook, e_5, error;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    id = req.params.id;
                    if (!mongoose_1.Types.ObjectId.isValid(id)) {
                        return [2 /*return*/, res.status(400).json({ success: false, error: "ID Inválido" })];
                    }
                    return [4 /*yield*/, BookModel_1.default.findByIdAndDelete(id)];
                case 1:
                    deletedBook = _b.sent();
                    if (!deletedBook) {
                        return [2 /*return*/, res.status(404).json({ success: false, error: "Libro no encontrado" })];
                    }
                    res.status(200).json({ success: true, data: deletedBook });
                    return [3 /*break*/, 3];
                case 2:
                    e_5 = _b.sent();
                    error = e_5;
                    res.status(500).json({ error: error.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return BookController;
}());
exports.default = BookController;
