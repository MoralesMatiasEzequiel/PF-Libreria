require('../../db');
const Review = require('../../collections/Review');
const getUserByIdCtrl = require('../userCtrls/getUserByIdCtrl');

const getReviewsCtrl = async () => {
  const reviews = await Review.find();

  const updatedReviews = [];

  await Promise.all(reviews.map(async (review) => {
    const userId = review.user.toString(); // Convertir ObjectId a cadena si es necesario
    const user = await getUserByIdCtrl(userId);
    const updatedReview = {
        ...review.toObject(),
        userNickname: user.nickname
      };
    updatedReviews.push(updatedReview);
  }));

  return updatedReviews;
};

module.exports = getReviewsCtrl;