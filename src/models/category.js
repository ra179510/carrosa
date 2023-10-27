const { DataType } = require('sequelize');
const { Database } = require('../configs/sequelize');

const Category = Database.getInstance().sequelize.define('Category',{
    name: {
        type: DataType.STRING,
        allowNULL: false
    },

    active: {
        type: DataType.BOOLEAN,
        allowNULL: false
    }
});

module.exports = { Category };