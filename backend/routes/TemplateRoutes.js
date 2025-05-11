const express = require("express")
const { addTemplate,upload} = require("../controllers/TemplateController")
const { verifyToken } = require("../controllers/Authcontroller")
const router = express.Router()


router.post("/addtemplate", verifyToken, upload.single("thumbnailUrl"),addTemplate);
module.exports = router