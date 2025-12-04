"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = __importDefault(require("./config/mongodb"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var bookRoutes_1 = __importDefault(require("./routes/bookRoutes"));
var authRoutes_1 = __importDefault(require("./routes/authRoutes"));
dotenv_1.default.config();
var PORT = process.env.PORT || 2000;
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", function (req, res) {
    res.json({ status: true });
});
app.use("/auth", authRoutes_1.default);
app.use("/books", bookRoutes_1.default);
app.use(function (__, res) {
    res.status(404).json({ success: false, error: "Algo falló" });
});
//servidor en escucha
(0, mongodb_1.default)().then(function () {
    app.listen(PORT, function () {
        console.log("Servidor en escucha en el puerto http://localhost:".concat(PORT));
    });
});
