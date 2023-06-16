const postProductCtrl = require('../../controllers/productCtrls/postProductCtrl');

const postProductHandler = async (req, res) => {

    const { name, brand, stock, price, salePrice, image, description, rating, active, subcategories } = req.body;

    try {
        
        if(!name || !brand || !stock || !price || !image){
            return res.status(400).send({ error: 'Missing data' });
        }

        if (
            typeof name !== 'string' ||
            typeof brand !== 'string' ||
            typeof stock !== 'number' ||
            typeof price !== 'number' ||
            (salePrice && typeof salePrice !== 'number') ||
            typeof image !== 'string' ||
            (description && typeof description !== 'string') ||
            (rating && typeof rating !== 'number') ||
            (active && typeof active !== 'boolean') ||
            (subcategories && !Array.isArray(subcategories))
        ){
            return res.status(400).send({ error: 'Incorrect DataType' });
        }

        const newProduct = await postProductCtrl(name, brand, stock, price, salePrice, image, description, rating, active, subcategories);

        res.status(200).send(`El producto ${newProduct.name} ha sido creado.`);

    } catch (error) {
        
        return res.status(500).send(error.message);

    }
};

module.exports = postProductHandler;