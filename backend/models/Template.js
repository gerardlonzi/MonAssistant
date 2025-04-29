const mongoose = require("mongoose")

const TemplateSchema = new mongoose.Schema({
    name: String,
    thumbnailUrl: String,
    html: String,
    isActive: { type: Boolean, default: true },
  },{timestamps:true});

  const TemplateModel = mongoose.model("Template",TemplateSchema)

  module.exports = TemplateModel