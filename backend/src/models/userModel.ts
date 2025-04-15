import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, select: false },
    googleId: { type: String , unique: true, sparse: true },
    gender: {type:String,enum: ["male","female"]},
    avatar: { type: String, default: false },
    verified: { type: Boolean, default: false },
    watching:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
        },
    ],
    watched:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
        },
    ],
    saved:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
        },
    ],
    role: { type: String, enum: ["user", "admin", "instructor"], default: "user" },
    verificationToken: { type: String},
    verificationExpire: { type: Date },
    passwordResetToken: { type: String },
    passwordResetExpire: { type: Date },
    }, {
    timestamps: true,
    });

    export const User = mongoose.models?.User || mongoose.model("User", schema);