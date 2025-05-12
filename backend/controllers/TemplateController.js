
const sanitizeHtml = require("../utils/sanitize");
const TemplateModel = require("../models/Template");
const cloudinary = require("../config/cloudinary");
const sharp = require("sharp");
const multer = require("multer");
const storage = multer.memoryStorage();

exports.upload = multer({ storage: storage });

exports.addTemplate = async(req, res,next) => {
  console.log("====================");

  const { name, html,categorie } = req.body;
  if (!name) {
    res.status(401).json({ message: { name: "veuillez entrer le nom du template" } });
    return
 }
 if (!html) {
    res.status(401).json({ message: { html: "veuillez entrer le code du template" } });
    return
 }
 if (!categorie) {
    res.status(401).json({ message: { categorie: "veuillez entrer la categorie" } });
    return
 }
 if (!req.file) {
   res.status(401).json({ message: { thumbnailUrl: "Image manquante ou invalide." } });
   return 
 }
else{

  try {
    
    const cleanHtml = sanitizeHtml(html);

    const imageBuffer = await sharp(req.file.buffer).webp().resize(800, 600, {
      fit: sharp.fit.inside,
      withoutEnlargement: true
    }).toBuffer();

    const newTemplate = new TemplateModel({
      name,
      html: cleanHtml,
      categorie,
    });
    console.log("====================");

     const result = cloudinary.uploader.upload_stream({
       folder: "templateFolder",
       allowed_formats: ['jpg', 'jpeg', 'png', 'avif', 'webp'],
       transformation: [
         { width: 800, height: 600, crop: "limit" },
         { quality: "auto:good" }
       ]
     }, async(error, result) => {
       if (error) {
         console.log("8888888888888888888==");
         return;
       }
       console.log("++++++++++++++++++++++");


       newTemplate.thumbnailUrl = result.secure_url;
       await newTemplate.save();
       return;
     });
     await result.end(imageBuffer);
    res.status(201).json({ message: "Template créé avec succès" });
 return

  } catch (err) {
    console.error("Server error:", err);
     res.status(501).json({ message: "Une erreur est survenue" });
      next(err);
      return
  }

}
};
