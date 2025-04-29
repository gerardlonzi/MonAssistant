const cloudinary = require('cloudinary').v2;
const dotenv = require("dotenv")
const path = require("path")

dotenv.config({ path: path.resolve(__dirname, '../.env') })


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

module.exports = cloudinary;
