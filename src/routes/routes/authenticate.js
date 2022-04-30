const express = require('express');
const router = express.Router();
const ProfessorController = require('../../controller/professor');
const jwt = require("jsonwebtoken");

router.post('/auth', async (req, res) => {
    const { name } = req.body;

    try {
        const professor = await ProfessorController.getOneByName(name);

        const token = jwt.sign({ id: professor.id }, process.env.SECRET, { expiresIn: 300 });

        res.send({professor, token});
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message)
    }

    
});


module.exports = app => app.use('' ,router);