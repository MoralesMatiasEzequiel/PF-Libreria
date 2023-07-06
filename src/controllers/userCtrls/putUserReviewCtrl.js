require('../../db');
const User = require('../../collections/User');

const putUserReviewCtrl = async (_id, reviews) => {

    let update = {}; // Inicializar el objeto de actualización

    if (Array.isArray(reviews) && reviews.length > 0) {
        update.$addToSet = { reviews: { $each: reviews } };
    }

    const updated = await User.findOneAndUpdate({ _id }, update, { new: true });

    return updated;
};

module.exports = putUserReviewCtrl;