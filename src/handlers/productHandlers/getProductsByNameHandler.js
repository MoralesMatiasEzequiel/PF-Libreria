const getProductsByNameCtrl = require('../../controllers/productCtrls/getProductsByNameCtrl');

const getProductsByNameHandler = async (req, res) => {
    const { name } = req.query;  

    try {
        const productsByName = await getProductsByNameCtrl(name);

        if (productsByName.length === 0) {
            return res.status(404).send(`No products found with name: "${name}"`);
        }

        res.status(200).send(productsByName);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getProductsByNameHandler;