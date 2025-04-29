const User = require("../models/users")
const bcript = require("bcryptjs")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")


exports.register = async (req, res) => {
    const { name, email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ message: "veuillez remplir tous les champs s'il vous plait" })
    }
    
    try {
        const exist = await User.findOne({ email })
        
        if (exist) {
            return res.status(401).json({ message:{email:"cette adresse email existe dèjà"} })
        }
        let Passhashed = await bcript.hash(password,12) 
        const user = new User({email,name,password:Passhashed})
        await user.save()
        const token = jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRET,{expiresIn:"1d"})
         res.cookie("token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV =="production",
            samSite:"Strict",
            maxAge : 24 * 60 * 60 * 1000
        }).status(201).json({message:"inscription reussie"})
        return
    }
    catch (err) {
        return res.status(500).json({message:"une erreur est survenue veuillez ressayer"})
    }
}
exports.login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ message: "veuillez remplir tous les champs s'il vous plait" })
    }
    
    try {
        const user = await User.findOne({ email })
        
        if (!user) {
            return res.status(401).json({ message:{email:"cette adresse email n'existe pas"} })
        }
        let comparePassword = await bcript.compare(password,user.password) 
        if(!comparePassword){
            return res.status(401).json({message:{password:"mot de passe incorrect"}})
        }
        const token = jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRET,{expiresIn:"1d"})
        
         res.cookie("token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV =="production",
            samSite:"Strict",
            maxAge : 24 * 60 * 60 * 1000
        }).status(201).json({message:"vous êtes connecté"})
        return
    }
    catch (err) {
        return res.status(500).json({message:"une erreur est survenue veuillez ressayer"})
    }
}

exports.verifyToken= async(req,res,next)=>{
    const token = req.cookies.token
    let IsWebsiteAdmin= false
    if(!token){
        return res.status(401).json({message:"vous etes pas authentifie"})
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const userId = new mongoose.Types.ObjectId(decoded.id)
        const userData = await  User.findOne({_id:userId})
        
        if(userData && userData.role ==="admin"){
            IsWebsiteAdmin = true
        }
        console.log("la valeur est " +IsWebsiteAdmin);
        
        res.json({user:decoded,IsWebsiteAdmin})
    }
    catch(err){
        return res.status(401).json({message:"token invalide"})
    }

}
