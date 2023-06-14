const { Schema, model } = require('mongoose');  //Un Schema (esquema) son las propiedades que van a tener nuestros datos en la DB.

const userSchema = new Schema = ({
    username:{
        type: String,
        unique: true, //Con esta opción el nombre será único. 
        require: true //El nombre es requerido para poder crear la cuenta.
    },
    email: String,
    password: Number,
    date: {
        type: Date,
        default: new Date() // Fecha de creacion de cuenta del usuario. Si el usuario no ingresa una fecha, por defecto se podrá la fecha actual. 
    }
});



module.exports = model('User', userSchema);