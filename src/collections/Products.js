const { Schema, model } = require('mongoose');  //Un Schema (esquema) son las propiedades que van a tener nuestros datos en la DB.

const productSchema = new Schema = ({
    name: String,
    brand: String,
    stock: Number,
    price: Number,
    image: String,
    description: String,



});



module.exports = model('Product', productSchema);