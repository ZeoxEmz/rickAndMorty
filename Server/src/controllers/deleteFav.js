const {Favorite} = require("../DB_connection");

const deleteFav= async (req, res)=>{
  const { id } = req.params;
  try {
    const deletedFav = await Favorite.destroy({ where: { id } });
    /* if (!deletedFav) {
      return res.status(404).json({ error: "Personaje no encontrado" });
    } */
    const favs = await Favorite.findAll();
    return res.json(favs);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = deleteFav;