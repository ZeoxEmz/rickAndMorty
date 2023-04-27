const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = (req,res)=>{
    const {id} = req.params;

    axios.get(URL+id)
    .then((response)=>{
        const character = {
            id:response.data.id,
            name:response.data.name,
            species:response.data.species,
            gender:response.data.gender,
            image:response.data.image,
            origin:response.data.origin?.name,
            status:response.data.status
        }
        res.status(200).json(character);
    }).catch((error)=>{
        res.status(500).json({error:error.messsage})
    })

}

module.exports = getCharDetail;








/* const axios = require("axios")

const getCharDetail =(res,id)=>{
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res=> res.data)
    .then(data => {
        let character = {
            id:data.id,
            name:data.name,
            gender:data.gender,
            species:data.species,
            image:data.image,
            status:data.status,
            origin:data.origin?.name,
        }
        res.writeHead(200, {"Content-Type":"application/json"})
        .end(JSON.stringify(character))
    })
    .catch(err=> res.writeHead(500,{"Content-Type":"text/plain"})
    .end(`el personaje con el id: ${id} no fue encontrado`)
    )
}

module.exports = getCharDetail; */