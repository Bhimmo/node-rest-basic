const app = require("../server/app");
const professorController = require("../../controller/professor");

app.get('/professor', async (req, res)=> {
    try {
        let getProfessor = await professorController.getAllProfessor();

        res.status(200).json(getProfessor);
    } catch (error) {
        res.status(500).json({
            Error: error.message
        })
    }
})

app.post('/professor', async (req, res)=> {
    const dados = req.body;

    try {
        let createProfessor = await professorController.createProfessor(dados);

        console.log(createProfessor);
        res.status(201).json(createProfessor)
    } catch (error) {
        res.status(400).json({
            Error: error.message
        })
    }
})

module.exports = app;