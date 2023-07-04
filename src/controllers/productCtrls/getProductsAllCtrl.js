require('../../db');
const Product = require('../../collections/Product');

const getProductsAllCtrl = async () => {
    const products = await Product.find();

    return products;
};

module.exports = getProductsAllCtrl;