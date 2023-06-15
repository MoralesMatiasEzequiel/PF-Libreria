require('../../db');
const Product = require('../../collections/Product');

const putProductCtrl = async (_id, name, brand, stock, price, salePrice, image, description, rating, active) => {

    const updated = await Product.updateOne({_id}, {$set: {name, brand, stock, price, salePrice, image, description, rating, active}});

    return updated;
};

module.exports = putProductCtrl;