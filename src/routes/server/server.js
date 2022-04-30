const app = require("./app");

let port = 3000;
app.listen(port, ()=> {
    console.log("Servidor aberto na porta: "+ port);
})