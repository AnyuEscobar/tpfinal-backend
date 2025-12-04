"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authController_1 = __importDefault(require("../controllers/authController"));
var authRouter = (0, express_1.Router)();
authRouter.post("/register", authController_1.default.register);
authRouter.post("/login", authController_1.default.login);
exports.default = authRouter;
