const app = require("../server/app");

app.get('/alunos', (req, res)=> {
    res.send({message: "Hello World!"});
})

module.exports = app;