const putProductCtrl = require('../../controllers/productCtrls/putProductCtrl');

const putProductHandler = async (req, res) => {
    const { _id, name, brand, stock, price, salePrice, image, description, rating, active } = req.body;
    try {
      if(!_id) res.status(400).json({ error: 'Missing ID' });

      const productUpdate = await putProductCtrl(_id, name, brand, stock, price, salePrice, image, description, rating, active)
    
      res.status(200).send(productUpdate);

    } catch (error) {
        res.status(400).send({ error: error.message })
    }
};

module.exports = putProductHandler;