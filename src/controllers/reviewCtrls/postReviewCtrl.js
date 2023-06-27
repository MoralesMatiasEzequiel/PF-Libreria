const  Review  = require('../../collections/Review');

const postReviewCtrl = async (user, rating, message) => {

    const newReview = {
        user,
        rating,
        message
    }

    const createdReview = await Review.create(newReview);

    return createdReview;
}

module.exports = postReviewCtrl;