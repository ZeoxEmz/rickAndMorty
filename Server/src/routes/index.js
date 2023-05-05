const {Router} = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const {login,register} = require("../controllers/login")
const postFav = require("../controllers/postFavs")
const deleteFav = require("../controllers/deleteFav")
const getFavorite = require("../controllers/getFavorites")

const router = Router();

router.get("/login",login)

router.post("/register",register)

router.get("/onsearch/:id",getCharById);

router.get("/detail/:id",getCharDetail);

//-------------------------------------------------favs--------------------------------------------------

router.delete("/fav/:id",deleteFav)

router.post("/fav",postFav)

router.get("/fav",getFavorite)


module.exports = router;