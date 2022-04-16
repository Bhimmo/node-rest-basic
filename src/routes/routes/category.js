const app = require('../server/app');
const categoryController = require('../../controller/category');

app.post('/category', async (req, res) => {
    const dados = req.body;

    try {
        const createCategory = await categoryController.create(dados);

        res.json(createCategory); 
    } catch (error) {
        res.status(400).json({error})
    }
});

app.get('/category', async (req, res) => {
    try {
        const getCategory = await categoryController.getAll();

        res.json(getCategory);
    } catch (error) {
        res.status(500).json({error});
    }
});

app.get('/category/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const getOneCategory = await categoryController.getOneCategory(id);

        res.json(getOneCategory);
    } catch (error) {
        res.status(400).json({error});
    }
});

app.patch('/category/:id', async (req, res) => {
    const { id } = req.params;
    const dados = req.body;
    try {
        const alterCategory = await categoryController.alterCategory(id, dados);

        res.json(alterCategory);
    } catch (error) {
        res.status(400).json({error});
    }
});

app.delete('/category/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await categoryController.delete(id);

        res.status(204).json({});
    } catch (error) {
        res.status(400).json({error});
    }
})

module.exports = app;