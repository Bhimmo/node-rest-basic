const express = require('express');
const router = express.Router();

router.get('/alunos', (req, res)=> {
    res.send({message: "Hello World!"});
})

module.exports = app => app.use('', router);