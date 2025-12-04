"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, {
    versionKey: false
});
var User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
