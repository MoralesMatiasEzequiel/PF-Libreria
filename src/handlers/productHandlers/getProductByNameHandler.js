const getProductByNameCtrl = require('../../controllers/productCtrls/getProductByNameCtrl');

const getProductByNameHandler = async (req, res) => {
    const { name } = req.query;  

    try {
        const productByName = await getProductByNameCtrl(name);

        if (productByName.length === 0) {
            return res.status(404).send(`No product found with that name: "${name}"`);
        }

        res.status(200).send(productByName);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getProductByNameHandler;