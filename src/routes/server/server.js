const app = require("./app");
const routers = require("./routes");

let port = 3000;
app.listen(port, ()=> {
    console.log("Servidor aberto na porta: "+ port);
})