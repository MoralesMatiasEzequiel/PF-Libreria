const { Schema, model } = require('mongoose');  //Un Schema (esquema) son las propiedades que van a tener nuestros datos en la DB.
const validator = require('validator'); //Nos traemos todas las validaciones de la librería 'Validator' de npmjs.


const productSchema = new Schema({
    name: {
        type: String,
        unique: true,
        require: true 
    },
    
    brand: {
        type: String,
        require: true,
        validate: {
            validator: function (value) {
              return /^[A-Za-z\s]+$/.test(value);
            },
            message: 'Invalid brand'
        } 
    },
    
    stock: {
        type: Number,
        require: true,
        validate: {
            validator: function (value) {
              return Number.isInteger(value) && value >= 0;
            },
            message: 'Invalid stock'
        }
    },
    
    price: {
        type: Number,
        require: true,
        validate: {
            validator: function (value) {
              return Number.isInteger(value) && value >= 0;
            },
            message: 'Invalid price'
        }
    },
    
    salePrice: Number,
    
    image: {
        type: String,
        require: true,
        validate: {
            validator: function (value) {
              // Verificar si es una URL válida
              return validator.isURL(value); 
            },
            message: 'The image URL is invalid'
          }
    },
    
    description: String,
    
    rating: {
        type: Number,
        min: 0,
        max: 5
    },

    active: {
        type: Boolean,
        default: true
    },

    subcategories: [
        {
          type: Schema.Types.ObjectId,
          ref: 'SubCategory'
        }
    ]
});

module.exports = model('Product', productSchema);
