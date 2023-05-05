require("dotenv").config();
const {Sequelize} = require("sequelize");
const {USER,PASSWORD,HOST,PORT,BDD} = process.env;
const FavoriteModel = require("./models/Favorite");
const UserModel = require("./models/User");

const database = new Sequelize(`postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`,{logging:false,native: false});

FavoriteModel(database);
UserModel(database);

const {Favorite,User} = database.models;

Favorite.belongsToMany(User,{through:"user_favorite"});
User.belongsToMany(Favorite,{through:"user_favorite"});


module.exports = {
    ...database.models,
    database,
 };
