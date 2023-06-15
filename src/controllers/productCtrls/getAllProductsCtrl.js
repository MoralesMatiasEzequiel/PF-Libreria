require('../../db');
const Product = require('../../collections/Product');

const getAllProductsCtrl = async () => {
    const products = await Product.find();

    // console.log(products);
    return products
};

module.exports = getAllProductsCtrl;