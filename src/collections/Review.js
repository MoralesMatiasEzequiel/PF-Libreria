const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },

    message: {
        type: String,
        maxlength: 500 //hasta 500 caracteres
    }
    
});

module.exports = model('Review', reviewSchema);