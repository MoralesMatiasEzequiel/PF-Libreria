const { Schema, model } = require('mongoose');  //Un Schema (esquema) son las propiedades que van a tener nuestros datos en la DB.
const validator = require('validator'); //Nos traemos todas las validaciones de la librería 'Validator' de npmjs.

const userSchema = new Schema ({
    name:{
        type: String,
        require: true, //El nombre es requerido para poder crear la cuenta.
    },

    nickname:{
        type: String,
        require: true
    },

    surname:{
        type: String,
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

    picture:{
        type: String,
        require: true
    },

    emailVerified:{
        type: Boolean,
        require: true
    },

    date: {
        type: Date,
        default: new Date() // Fecha de creacion de cuenta del usuario. Si el usuario no ingresa una fecha, por defecto se podrá la fecha actual. 
    },
    
    active: {
        type: Boolean,
        default: true
    },

    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],

    favorites: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],

    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Order'
        }
    ]
});



module.exports = model('User', userSchema);