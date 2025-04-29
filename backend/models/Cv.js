const mongoose = require("mongoose")

const CvSchema = new mongoose.schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
    vsid: { type: String, required: true },
    title: { type: String, default: 'Mon CV' },
    data: { type: Object, required: true }, 
    templateId: { type: mongoose.Schema.Types.ObjectId, ref: 'Template', required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
},{timestamps:true})

const CvModel = mongoose.model("Cv",CvSchema)
module.exports = CvModel