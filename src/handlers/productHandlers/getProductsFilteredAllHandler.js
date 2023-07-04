const getProductsFilteredAllCtrl = require('../../controllers/productCtrls/getProductsFilteredAllCtrl');

const getProductsFilteredAllHandler = async (req, res) => {
    const { name, brand, subcategories } = req.query;  

    try {
        const productsFiltered = await getProductsFilteredAllCtrl(name, brand, subcategories);

        if (productsFiltered.length === 0) {
            return res.status(404).send(`No products that match with that search`);
        }

        res.status(200).send(productsFiltered);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getProductsFilteredAllHandler;