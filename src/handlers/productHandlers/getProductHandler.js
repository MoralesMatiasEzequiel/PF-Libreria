const getProductsCtrl = require('../../controllers/productCtrls/getProductCtrl');


export const getProductHandler = async (req, res) => {
    const { id } = req.params;

    try {
       

    } catch (error) {
        res.status(400).send({ error: error.message, description: `ID not found '${id}'`}); 
    }
};