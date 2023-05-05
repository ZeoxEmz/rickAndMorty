const {User} = require("../DB_connection");

const postUser = async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password) res.status(400).send("Faltan datos")
    try {
        let user = await User.findOne({ where: {email} });
        if (!user) {
            user = await User.create({email, password})
            res.status(201).send({user});
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = postUser;