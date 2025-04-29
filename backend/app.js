const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const redis = require('redis');
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const cookie_parser = require("cookie-parser")
const path = require("path")
const AuthRoute  = require("./routes/AuthRouter")
const TemplateRoutes = require("./routes/TemplateRoutes")
dotenv.config({ path: path.resolve(__dirname, '../.env') })

const app = express()

const server = http.createServer(app);
const io = new Server(server,{cors:{origin:"*"}});

mongoose.connect(`${process.env.MONGODB_URL}`)
.then(()=>{
    server.listen(process.env.PORT,()=>{
        console.log("server connecte au port 5000")
    })
})
.catch(err=>{
    console.log("cette erreur est survenue: "+ err)
})

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use(cookie_parser())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

const redisClient = redis.createClient({
    url: process.env.REDIS_URL,
});

redisClient.connect().catch(console.error);

app.use("/auth",AuthRoute)
app.use(TemplateRoutes)





