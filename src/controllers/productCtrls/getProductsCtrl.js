require('../../db');
const Product = require('../../collections/Product');

const getProductsCtrl = async () => {
    const products = await Product.find();

    return products;
};

module.exports = getProductsCtrl;