require('dotenv').config();
const { URL_MONGODB } = process.env;
const mongoose = require('mongoose');


const mongo = async () => {
    await mongoose.connect(URL_MONGODB);
}

module.exports = mongo;
