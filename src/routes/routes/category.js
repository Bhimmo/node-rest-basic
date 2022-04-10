const app = require('../server/app');
const categoryController = require('../../controller/category');

app.post('/category', async (req, res) => {

    try {
        const createCategory = await categoryController.create(req.body);
        console.log(createCategory);

        res.json({createCategory}); 
    } catch (error) {
        res.status(500).json({
            status: "error"
        })
    }
});

module.exports = app;