"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const courseSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    instructor: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    ratingAverage: {
        type: Number,
        required: true,
        default: 0,
    },
    ratingQuantity: {
        type: Number,
        required: true,
        default: 0,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    subCategory: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    whatYouWillLearn: [
        {
            type: String,
            required: true,
        },
    ],
    requirements: [
        {
            type: String,
            required: true,
        },
    ],
    targetAudience: [
        {
            type: String,
            required: true,
        },
    ],
    isPublished: {
        type: Boolean,
        required: true,
        default: false,
    },
    isFree: {
        type: Boolean,
        required: true,
        default: false,
    },
    isApproved: {
        type: Boolean,
        required: true,
        default: false,
    },
    isRejected: {
        type: Boolean,
        required: true,
        default: false,
    },
    isFeatured: {
        type: Boolean,
        required: true,
        default: false,
    },
    isTrending: {
        type: Boolean,
        required: true,
        default: false,
    },
    isBestSeller: {
        type: Boolean,
        required: true,
        default: false,
    },
    coverImage: {
        type: String,
        required: true,
    },
    previewVideo: {
        type: String,
        required: true,
    },
    students: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
}, { timestamps: true });
exports.Course = ((_a = mongoose_1.default.models) === null || _a === void 0 ? void 0 : _a.Course) || mongoose_1.default.model("Course", courseSchema);
