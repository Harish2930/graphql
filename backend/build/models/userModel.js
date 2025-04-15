"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, select: false },
    googleId: { type: String, unique: true, sparse: true },
    gender: { type: String, enum: ["male", "female"] },
    avatar: { type: String, default: false },
    verified: { type: Boolean, default: false },
    watching: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Course",
        },
    ],
    watched: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Course",
        },
    ],
    saved: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Course",
        },
    ],
    role: { type: String, enum: ["user", "admin", "instructor"], default: "user" },
    verificationToken: { type: String },
    verificationExpire: { type: Date },
    passwordResetToken: { type: String },
    passwordResetExpire: { type: Date },
}, {
    timestamps: true,
});
exports.User = ((_a = mongoose_1.default.models) === null || _a === void 0 ? void 0 : _a.User) || mongoose_1.default.model("User", schema);
