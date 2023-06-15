const { Schema, model } = require('mongoose');

const subcategorySchema = new Schema({

    name:{
        type: String,
        unique: true,
        require: true
    },

    categories: Array

});

module.exports = model('Subcategory', subcategorySchema);