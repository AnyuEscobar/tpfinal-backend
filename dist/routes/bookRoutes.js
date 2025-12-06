"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var bookController_1 = __importDefault(require("../controllers/bookController"));
var authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
var bookRouter = (0, express_1.Router)();
bookRouter.get("/", bookController_1.default.getAllBooks);
bookRouter.get("/:id", bookController_1.default.getBook);
bookRouter.post("/", authMiddleware_1.default, bookController_1.default.addBook);
bookRouter.patch("/:id", authMiddleware_1.default, bookController_1.default.updateBook);
bookRouter.delete("/:id", authMiddleware_1.default, bookController_1.default.deleteBook);
exports.default = bookRouter;
