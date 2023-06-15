const { Schema, model } = require('mongoose');

const categorySchema = new Schema({

    name:{
        type: String,
        unique: true,
        require: true
    },

    subcategories: Array

});

module.exports = model('Category', categorySchema);