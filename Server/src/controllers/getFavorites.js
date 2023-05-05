const {Favorite} = require("../DB_connection");

const getFavorite = async (req, res)=>{
  try {
    const favs = await Favorite.findAll();
    return res.json(favs);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = getFavorite;