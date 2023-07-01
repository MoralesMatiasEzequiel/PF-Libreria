require('../../db');
const Product = require('../../collections/Product');
const getProductByIdCtrl = require('./getProductByIdCtrl');

const putRatingProductCtrl = async (_id, oneStarReviews, twoStarsReviews, threeStarsReviews, fourStarsReviews, fiveStarsReviews) => {

    const productToUpdate = await getProductByIdCtrl(_id);

    let totalPoints = (productToUpdate.oneStarReviews*1) + (productToUpdate.twoStarsReviews*2) + (productToUpdate.threeStarsReviews*3) + (productToUpdate.fourStarsReviews*4) + (productToUpdate.fiveStarsReviews*5);

    if(oneStarReviews){
        oneStarReviews = oneStarReviews + productToUpdate.oneStarReviews;
        totalPoints += 1;
    } else if(twoStarsReviews){
        twoStarsReviews = twoStarsReviews + productToUpdate.twoStarsReviews;
        totalPoints += 2;
    } else if(threeStarsReviews){
        threeStarsReviews = threeStarsReviews + productToUpdate.threeStarsReviews;
        totalPoints += 3;
    } else if(fourStarsReviews){
        fourStarsReviews = fourStarsReviews + productToUpdate.fourStarsReviews;
        totalPoints += 4;
    } else {
        fiveStarsReviews = fiveStarsReviews + productToUpdate.fiveStarsReviews;
        totalPoints += 5;
    }

    let totalReviews = (productToUpdate.oneStarReviews + productToUpdate.twoStarsReviews + productToUpdate.threeStarsReviews + productToUpdate.fourStarsReviews + productToUpdate.fiveStarsReviews) + 1;
    const rating = totalPoints / totalReviews;

    const updated = await Product.updateOne(
        {_id},
        {$set: {rating, oneStarReviews, twoStarsReviews, threeStarsReviews, fourStarsReviews, fiveStarsReviews}}
    );

    return updated;
};

module.exports = putRatingProductCtrl;