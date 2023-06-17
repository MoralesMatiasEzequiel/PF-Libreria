const getProductsFilteredCtrl = require('../../controllers/productCtrls/getProductsFilteredCtrl');

const getProductsFilteredHandler = async (req, res) => {
    const { name, brand, subcategories } = req.query;  

    try {
        const productsFiltered = await getProductsFilteredCtrl(name, brand, subcategories);

        if (productsFiltered.length === 0) {
            return res.status(404).send(`No products that match with that search`);
        }

        res.status(200).send(productsFiltered);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getProductsFilteredHandler;