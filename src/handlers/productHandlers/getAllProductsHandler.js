const getAllProductsCtrl = require('../../controllers/productCtrls/getAllProductsCtrl');

const getAllProductsHandler = async (req, res) => {

    try {
        const products = await getAllProductsCtrl();

        res.status(200).send(products);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = getAllProductsHandler;