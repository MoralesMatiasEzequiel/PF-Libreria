const { Schema, model } = require('mongoose');  //Un Schema (esquema) son las propiedades que van a tener nuestros datos en la DB.

const adminSchema = new Schema ({
    username:{
        type: String,
        unique: true, //Con esta opción el nombre será único. 
        require: true //El nombre es requerido para poder crear la cuenta.
    },
    email:{
        type: String,
        require: true 
    }
});


module.exports = model('User', adminSchema);