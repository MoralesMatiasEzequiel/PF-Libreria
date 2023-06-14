require('dotenv').config();
const { URL_MONGODB } = process.env;
const mongoose = require('mongoose');


const connection = async () => {
    await mongoose.connect(URL_MONGODB);
    console.log('DB listen');
}

module.exports = connection;
