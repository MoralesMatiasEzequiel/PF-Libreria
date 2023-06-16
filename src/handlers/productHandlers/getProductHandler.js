const getProductsCtrl = require('../../controllers/productCtrls/getProductCtrl');

const getProductHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await getProductsCtrl(id);

        res.status(200).send(product);

    } catch (error) {
        res.status(400).send({ description: `There's no product with ID: ${id}` }); 
    }
};

module.exports = getProductHandler;