const express = require ("express")
const path = require("path")

const app = express()
const router = express.Router()

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/home.html"))
})

router.get("/contato", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/contato.html"))
})

app.use(router)

app.listen(3333, ()=>{
    console.log("servidor rodando")
})



















//const http = require("http")

//const hostname = "localhost"
//const port = 3333

//const server = http.createServer((req, res)=>{
  // res.setHeader("Content-type", "text/plain")
  // res.end("hello world")
//})

//server.listen(port, hostname, ()=>{
 //  console.log("SERVIDOR RODANDO")
//})