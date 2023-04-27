const {Router} = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const login = require("../controllers/login")
let favs = require("../utils/favs");
const users = require("../utils/users")

const router = Router();

router.get("/onsearch/:id",getCharById);

router.get("/detail/:id",getCharDetail);

//-------------------------------------------------favs--------------------------------------------------

router.post("/rickandmorty/fav",(req,res)=>{
    const isFav = favs.find((char)=>char.id === req.body.id)
    if(isFav) res.status(200).json({error:"ya esta agregado a la lista de favoritos"}) 
    const item = req.body;
    favs.push(item);
    res.json(favs);
    
})

router.get("/rickandmorty/fav",(req,res)=>{
    res.status(200).json(favs)
})

router.delete("/rickandmorty/fav/:id",(req,res)=>{
    const {id} = req.params;
    favs = favs.filter((char)=>char.id !== Number(id))
    res.status(200).json({status:"ok"})
})

//--------------------------------------------------handlefavorites------------------------------------

router.get("/rickandmorty/login",(req,res)=>{

    const {email,password} = req.query
    users.forEach(user => {
        if(email === user.email && password === user.password) res.json({access:true})
        res.json({access:false})
    });
    
})

module.exports = router;
