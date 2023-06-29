const postProductCtrl = require('../../controllers/productCtrls/postProductCtrl');
const putProductCtrl = require('../../controllers/productCtrls/putProductCtrl');
const Product = require('../../collections/Product');

const postProductHandler = async (req, res) => {
  const { name, brand, stock, price, salePrice, image, description, active, subcategories } = req.body;

  try {
    if (!name || !brand || !stock || !price || !image) {
      return res.status(400).send({ error: 'Missing data' });
    }

    if (
      typeof name !== 'string') {
      return res.status(400).send({ error: 'Incorrect DataType - name' });
    }
    if (typeof image !== 'string') {
      return res.status(400).send({ error: 'Incorrect DataType - image' });
    }
    if (active && typeof active !== 'boolean') {
      return res.status(400).send({ error: 'Incorrect DataType - active' });
    }
    if (typeof brand !== 'string') {
      return res.status(400).send({ error: 'Incorrect DataType - brand' });
    }
    if (typeof price !== 'number') {
      return res.status(400).send({ error: 'Incorrect DataType - price' });
    }
    if (subcategories && !Array.isArray(subcategories)) {
      return res.status(400).send({ error: 'Incorrect DataType - SubCategories' });
    }
    if (salePrice && typeof salePrice !== 'number') {
      return res.status(400).send({ error: 'Incorrect DataType - salePrice' });
    }
    if (description && typeof description !== 'string') {
      return res.status(400).send({ error: 'Incorrect DataType - SubCategories - description' });
    }


    let existingProduct = await Product.findOne({ name, active: false });

    if (existingProduct) {
      existingProduct.active = true;
      await existingProduct.save();
      const _id = existingProduct._id;
      await putProductCtrl(_id, name, brand, stock, price, salePrice, image, description, active, subcategories);
      return res.status(200).send(`El producto ${existingProduct.name} ha sido reactivado y actualizado.`);
    }

    const newProduct = await postProductCtrl(name, brand, stock, price, salePrice, image, description, active, subcategories);

    res.status(200).send(newProduct);

  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.name) {
      return res.status(409).send({ error: 'Product with the same name already exists' });
    }

    return res.status(500).send(error.message);
  }
};

module.exports = postProductHandler;