const express = require('express');
const router = express.Router();
const categoryController = require('../../controller/category');

router.post('/category', async (req, res) => {
    const dados = req.body;

    try {
        const createCategory = await categoryController.create(dados);

        res.json(createCategory); 
    } catch (error) {
        res.status(400).json({error})
    }
});

router.get('/category', async (req, res) => {
    try {
        const getCategory = await categoryController.getAll();

        res.json(getCategory);
    } catch (error) {
        res.status(500).json({error});
    }
});

router.get('/category/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const getOneCategory = await categoryController.getOneCategory(id);

        res.json(getOneCategory);
    } catch (error) {
        res.status(400).json({error});
    }
});

router.patch('/category/:id', async (req, res) => {
    const { id } = req.params;
    const dados = req.body;
    try {
        const alterCategory = await categoryController.alterCategory(id, dados);

        res.json(alterCategory);
    } catch (error) {
        res.status(400).json({error});
    }
});

router.delete('/category/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await categoryController.delete(id);

        res.status(204).json({});
    } catch (error) {
        res.status(400).json({error});
    }
})

module.exports = app => app.use('/v1', router);