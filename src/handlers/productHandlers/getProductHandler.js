const getProductsCtrl = require('../../controllers/productCtrls/getProductCtrl');


const getProductHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await getProductsCtrl(id);

        res.status(200).send(product);

    } catch (error) {
        res.status(400).send({ error: error.message, description: `ID not found '${id}'`}); 
    }
};

module.exports = getProductHandler;