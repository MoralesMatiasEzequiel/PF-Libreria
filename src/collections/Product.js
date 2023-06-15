const { Schema, model } = require('mongoose');  //Un Schema (esquema) son las propiedades que van a tener nuestros datos en la DB.

const productSchema = new Schema({
    name: {
        type: String,
        unique: true,
        require: true
    },
    
    brand: {
        type: String,
        require: true
    },
    
    stock: {
        type: Number,
        require: true
    },
    
    price: {
        type: Number,
        require: true
    },
    
    salePrice: Number,
    
    image: {
        type: String,
        require: true
    },
    
    description: String,
    
    rating: Number,

    active: Boolean
});

module.exports = model('Product', productSchema);
