const { Schema, model } = require('mongoose');  
const validator = require('validator'); 


const orderSchema = new Schema({
    orderNro: {
        type: Number
    },
    email:{
        type: String,
        unique: true, 
        require: true,
        validate: {
            validator: function (value) {
              return validator.isEmail(value);
            },
            message: 'Invalid email'
        } 
    },
    
    name: {
        type: String,
        validate: {
            validator: function (value) {
              return /^[A-Za-zÁÉÍÓÚáéíóú\s]+$/.test(value);
            },
            message: 'Invalid name'
        } 
    },

    surname: {
        type: String,
        require: true,
        validate: {
            validator: function (value) {
              return /^[A-Za-zÁÉÍÓÚáéíóú\s]+$/.test(value);
            },
            message: 'Invalid name'
        } 
    },
    
    phone: {
        type: String,
        require: true,
    },
    
    dniCuit: {
        type: String,
        require: true,
    },
    
    street: {
        type: String,
        require: true,
        validate: {
            validator: function (value) {
              return /^[A-Za-zÁÉÍÓÚáéíóú\s]+$/.test(value);
            },
            message: 'Invalid street'
        } 
    },

    numberStreet: {
        type: String,
    },

    floor: {  //piso del dpto.
        type: String,
        validate: {
            validator: function (value) {
              return /^[A-Za-zÁÉÍÓÚáéíóú\s]+$/.test(value);
            },
            message: 'Invalid floor'
        } 
    },

    aparment: { 
        type: String,
        validate: {
            validator: function (value) {
              return /^[A-Za-zÁÉÍÓÚáéíóú\s]+$/.test(value);
            },
            message: 'Invalid floor'
        } 
    },

    province: { 
        type: String,
        require: true,
        validate: {
            validator: function (value) {
              return /^[A-Za-zÁÉÍÓÚáéíóú\s]+$/.test(value);
            },
            message: 'Invalid province'
        } 
    },

    city: { 
        type: String,
        require: true,
        validate: {
            validator: function (value) {
              return /^[A-Za-zÁÉÍÓÚáéíóú\s]+$/.test(value);
            },
            message: 'Invalid province'
        } 
    },

    comentary: { 
        type: String,
        validate: {
            validator: function (value) {
              return /^[A-Za-zÁÉÍÓÚáéíóú\s]+$/.test(value);
            },
            message: 'Invalid province'
        } 
    },
    
    products: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Product'
        }
    ],

    finalPrice: {
        type: Number,
        require: true,
        validate: {
            validator: function (value) {
              return Number.isInteger(value) && value >= 0;
            },
            message: 'Invalid final price'
        }
    }

});

module.exports = model('Order', orderSchema);
