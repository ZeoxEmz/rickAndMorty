const server = require("./app")
const PORT = 3001;

server.listen(PORT,()=>console.log(`Server raised in port: ${PORT}`));






/* const express = require("express");
const router = require("./routes/index");
const PORT = 3001;
const server = express();
const cors = require("cors")

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use(express.json());
server.use((req, res, next) => {
    req.url = '/rickandmorty' + req.url;
    next();
})

server.use("/", router);

server.listen(PORT,()=>console.log(`Server raised in port: ${PORT}`)); */






/* const http = require("http");
const getCharById = require("./controllers/getCharById")
const getCharDetail = require("./controllers/getCharDetail")


http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req
    let id =  url.split("/").at(-1)

    if(url.includes("onsearch")){
        console.log("estoy en onsearch")
        getCharById(res, id)
    }

    if(url.includes("detail")){
        getCharDetail(res, id)
    }
    
    

}).listen(3001, "localhost") */