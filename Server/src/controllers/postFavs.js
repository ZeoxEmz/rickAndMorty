const {Favorite} = require('../DB_connection');

const postFav = async (req, res) => {
const { name, origin, status, image, species, gender } = req.body;

  if (!name || !image || !species || !gender) {
    return res.status(401).json({ message: 'Faltan datos' });
  }

  try {
    const newFav = await Favorite.create({name,origin,status,image,species,gender});
    const allFavs = await Favorite.findAll();
    return res.status(200).json(allFavs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = postFav;