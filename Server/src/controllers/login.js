const {User} = require("../DB_connection");

const login = async (req,res)=>{
    const {email,password} = req.query;
    try {
        if(!email || !password) res.status(400).send("Faltan Datos");
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
        if (user.password !== password)return res.status(403).json({ message: "Contraseña incorrecta" });
        return res.json({ access: true });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const register = async (req,res)=>{
    const {email,password,id} = req.body;
    try {
        if(!email || !password) res.status(400).json({message:"error"})
        console.log(email,password,id)
        const user = await User.create({email,password,id})
        res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {login,register};