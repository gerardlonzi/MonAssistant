
const sanitizeHtml = require("../utils/sanitize");
const TemplateModel = require("../models/Template");
const cloudinary = require("../config/cloudinary");
const sharp = require("sharp");
const multer = require("multer");
const storage = multer.memoryStorage();

exports.upload = multer({ storage: storage });

exports.addTemplate = async (req, res) => {
  console.log("====================");

  const { name, html } = req.body;

  if (!name) {
    return res.status(401).json({ message: { name: "veuillez entrer le nom du template" } });
  }
  if (!html) {
    return res.status(401).json({ message: { html: "veuillez entrer le code du template" } });
  }
  if (!req.file) {
    return res.status(401).json({ message: { thumbnailUrl: "Image manquante ou invalide." } });
  }

  try {
    const cleanHtml = sanitizeHtml(html);

    const imageBuffer = await sharp(req.file.buffer).webp().resize(800, 600, {
      fit: sharp.fit.inside,
      withoutEnlargement: true
    }).toBuffer();

    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "templateFolder",
        resource_type: "image",
        allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
        transformation: [
          { width: 800, height: 600, crop: "limit" },
          { quality: "auto:good" }
        ]
      },
      async (error, result) => {
        if (error) {
          console.error("Cloudinary error:", error);
          return res.status(501).json({ message: { thumbnailUrl: "Erreur lors de l'importation de l'image! Veuillez réessayer." } });
        }

        const newTemplate = new TemplateModel({
          name,
          html: cleanHtml,
          thumbnailUrl: result.secure_url
        });

        await newTemplate.save();

        return res.status(201).json({ message: "Template créé avec succès" });
      }
    );

    uploadStream.end(imageBuffer);
  } catch (err) {
    console.error("Server error:", err);
    return res.status(501).json({ message: "Une erreur est survenue" });
  }
};
