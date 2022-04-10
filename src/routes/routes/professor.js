const app = require("../server/app");
const professorController = require("../../controller/professor");

app.get('/professor', (req, res)=> {
    let createTeacher = professorController.create();

    res.send.json({createTeacher});
})

module.exports = app;