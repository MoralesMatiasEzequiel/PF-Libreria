const { Schema, model } = require('mongoose');  //Un Schema (esquema) son las propiedades que van a tener nuestros datos en la DB.
const validator = require('validator'); //Nos traemos todas las validaciones de la librería 'Validator' de npmjs.

const userSchema = new Schema ({
    username:{
        type: String,
        unique: true, //Con esta opción el nombre será único. 
        require: true, //El nombre es requerido para poder crear la cuenta.
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
    password:{
        type: String,
        require: true,
        validate: {
            validator: function (value) {
              // Verificar que la contraseña tenga al menos 6 caracteres
              return value.length >= 6;
            },
            message: 'Password must be at least 6 characters'
        }
    },
    date: {
        type: Date,
        default: new Date() // Fecha de creacion de cuenta del usuario. Si el usuario no ingresa una fecha, por defecto se podrá la fecha actual. 
    },
    
    active: {
        type: Boolean,
        default: true
    }
});



module.exports = model('User', userSchema);