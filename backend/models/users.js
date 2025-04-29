const mongoose = require("mongoose") 

const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    plan: { type: String, default: 'gratuit', enum: ["gratuit", "pro"] },
    role: { type: String, default: "user", enum: ["user", "admin"] },
}, { timestamps: true })

const User = mongoose.model("User", userSchema)

module.exports = User