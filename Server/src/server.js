const server = require("./app")
const {database} = require("./DB_connection");
const PORT = 3001;

database.sync({force:true}).then(()=>{
    server.listen(PORT,()=>{
        console.log("listening on port", PORT)
    })
}).catch(error=>console.log(error.message));

