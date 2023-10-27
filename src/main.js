const express = require('express')

const { Database } = require ('./configs/sequelize');
const { Category } = require ('./models/category');

Database.getInstance();

const db = Database.getInstance();

const app = express();

app.get('/api/categories', async (rec, res) =>{
    const categories = Category.findAll();

    res.json({
        data: categories
    });
});

app.post('/api/categories', async(req, res) => {
    const category = await Category.create(req.params);

    res.json({
        data: category
    })
});

app.listen(8000, async () => {

    await db.sync();
    console.log('Server is running on port 8000!');
});