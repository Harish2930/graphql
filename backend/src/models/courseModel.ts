import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
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
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

export const Course = mongoose.models?.Course || mongoose.model("Course", courseSchema);
