require('../../db');
const Product = require('../../collections/Product');

const getProductsRatingCtrl = async () => {
    const productsRating = await Product.find({rating: { $gte: 4 }});

    return productsRating;
};

module.exports = getProductsRatingCtrl;