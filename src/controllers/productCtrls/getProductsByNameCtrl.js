require('../../db');
const Product = require('../../collections/Product');

const getProductsByNameCtrl = async (name) => {
  if (name) {
    const productsByName = await Product.find({ name: { $regex: name, $options: 'i' } });
    return productsByName;
  }
};

module.exports = getProductsByNameCtrl;