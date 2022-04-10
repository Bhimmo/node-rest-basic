const app = require('../server/app');
const categoryController = require('../../controller/category');

app.post('/category', async (req, res) => {

    try {
        const createCategory = await categoryController.create(req.body);
        console.log(createCategory);

        res.json(createCategory); 
    } catch (error) {
        res.status(400).json({error})
    }
});

app.get('/', async (req, res) => {
    try {
        const getCategory = await categoryController.getAll();
        console.log(getCategory);

        res.json(getCategory);
    } catch (error) {
        res.status(500).json({error});
    }
});

app.get('/:id', async (req, res) => {
    try {
        const getOneCategory = await categoryController.getOneCategory(req.params);

        res.json(getOneCategory);
    } catch (error) {
        res.status(400).json({error});
    }
});

app.patch('/:id', async (req, res) => {
    try {
        const alterCategory = await categoryController.alterCategory(req.params, req.body);

        res.json(alterCategory);
    } catch (error) {
        res.status(400).json({error});
    }
});

app.delete('/:id', async (req, res) => {
    try {
        await categoryController.delete(req.params);

        res.status(204).json({});
    } catch (error) {
        res.status(400).json({error});
    }
})

module.exports = app;