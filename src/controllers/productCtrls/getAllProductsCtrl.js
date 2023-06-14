require('../../db');
const Product = require('../../collections/Products');

export const getAllProductsCtrl = async () => {
    return await Product.find();
}