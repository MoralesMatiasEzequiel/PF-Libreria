const getAllProductsCtrl = require('../../controllers/productCtrls/getAllProductsCtrl');

const getAllProductsHandler = async (req, res) => {

    try {
        const products = getAllProductsCtrl();

        console.log(products);
        res.status(200).send(products);

    } catch (error) {
        res.status(400).send({ error: error.message});
    }
};

module.exports = getAllProductsHandler;