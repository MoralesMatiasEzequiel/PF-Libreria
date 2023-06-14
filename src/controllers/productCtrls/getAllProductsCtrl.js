require('../../db');
const Product = require('../../collections/Products');

const getAllProductsCtrl = async () => {
    return await Product.find();
};

module.exports = getAllProductsCtrl;