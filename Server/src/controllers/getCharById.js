const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req,res)=>{
    const {id} = req.params;
    axios.get(URL+id)
    .then((response)=>{
        const {id,name,species,gender,image} = response.data;
        res.status(200).json({id,name,species,gender,image});
    }).catch((error)=>{
        res.status(500).json({error:error.messsage})
    })
}

/* 
    const axios = require("axios");
    const URL = "https://rickandmortyapi.com/api/character/";
    
    const getCharById = (req,res)=>{
    const {id} = req.params;
    axios.get(URL + id)
    .then(response=> {
        if(!response.data.id) res.status(404).send("Not fount")
        const character ={
            id:response.data.id,
            name:response.data.name,
            species:response.data.species,
            gender:response.data.gender,
            image:response.data.image
        }
        res.status(200).json(character)
    })
    .catch(res.status(500).send(error.message))
} */



module.exports = getCharById;
/* const axios = require("axios")
const URL_BASE = "https://rickandmortyapi.com/api"

const successH = (response,res)=>{
    const { id, image, name, gender, species} = response.data;
    res.writeHead(200, { "Content-Type":"application/json" })
    res.end(JSON.stringify({ id, image, name, gender, species }))
}

const errorH = (err,res)=>{
    res.writeHead(500,{ "Content-Type":"text/plain" })
    res.end(err.message)
}

const getCharById = (res, id) => {
    axios.get(`${URL_BASE}/character/${id}`)
    .then((response)=>successH(response,res))
    .catch((err)=>errorH(err,res))
}

module.exports = getCharById; */

/* const axios = require("axios")

const getCharById =(res,id)=>{
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(result => result.data)
    .then(data => {
        let character = {
            id:data.id,
            name:data.name,
            image:data.image,
            gender:data.gender,
            species:data.species,
        }
        res
        .writeHead(200,{"Content-Type":"application/json"})
        .end(JSON.stringify(character))
    })
}

module.exports = getCharById; */