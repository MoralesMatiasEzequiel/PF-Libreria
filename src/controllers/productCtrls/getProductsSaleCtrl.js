require('../../db');
const Product = require('../../collections/Product');

const getProductsSaleCtrl = async () => {
    const productsSale = await Product.find({salePrice: { $gt: 0 }});

    return productsSale;
};

module.exports = getProductsSaleCtrl;