const getProductsRatingCtrl = require('../../controllers/productCtrls/getProductsRatingCtrl');

const getProductsRatingHandler = async (req, res) => {

    try {
        const productsRating = await getProductsRatingCtrl();

        res.status(200).send(productsRating);

    } catch (error) {
        res.status(400).send({ description: `Error product rating` }); 
    }
};

module.exports = getProductsRatingHandler;