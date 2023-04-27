const express = require("express");
const router = require("./routes/index");
const server = express();
const cors = require("cors")

server.use(express.json());
server.use(cors())


server.use("/", router);

module.exports = server