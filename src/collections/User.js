const { Schema, model } = require('mongoose');  //Un Schema (esquema) son las propiedades que van a tener nuestros datos en la DB.

const userSchema = new Schema ({
    username:{
        type: String,
        unique: true, //Con esta opción el nombre será único. 
        require: true //El nombre es requerido para poder crear la cuenta.
    },
    email:{
        type: String,
        unique: true, 
        require: true 
    },
    password:{
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: new Date() // Fecha de creacion de cuenta del usuario. Si el usuario no ingresa una fecha, por defecto se podrá la fecha actual. 
    },
    active: Boolean
});



module.exports = model('User', userSchema);