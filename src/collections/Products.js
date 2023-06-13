const { Schema, model } = require('mongoose');

const productSchema = new Schema = ({
    name: String,
    brand: String,
    stock: Number,
    price: Number,
    image: String,
    description: String,



});



module.exports = model('Product', productSchema);