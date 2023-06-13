const mongoose = require('mongoose');


const mongo = async () => {
    await mongoose.connect('mongodb+srv://TuLibrito:tulibrito@cluster0.pcizmgc.mongodb.net/?retryWrites=true&w=majority'); 
    console.log('DB listen');
}

module.exports = mongo;
