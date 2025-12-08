"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authController_1 = __importDefault(require("../controllers/authController"));
var rateLimitMiddleware_1 = __importDefault(require("../middleware/rateLimitMiddleware"));
var authRouter = (0, express_1.Router)();
authRouter.post("/register", rateLimitMiddleware_1.default, authController_1.default.register);
authRouter.post("/login", rateLimitMiddleware_1.default, authController_1.default.login);
exports.default = authRouter;
