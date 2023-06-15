const createProduct = require('../../controllers/productCtrls/postProductCtrl');

const postProductHandler = async (req, res) => {

    const { name, brand, stock, price, salePrice, image, description, rating, active, subcategories } = req.body;

    try {
        
        if(!name || !brand || !stock || !price || !image || !subcategories){
            return res.status(400).send({ error: 'Missing data' });
        }

        const newProduct = await createProduct(name, brand, stock, price, salePrice, image, description, rating, active, subcategories);

        res.status(200).json(newProduct);

    } catch (error) {
        
    }
};

module.exports = postProductHandler;