require('../../db');
const Product = require('../../collections/Product');

const getProductCtrl = async (_id) => {
    const product = await Product.findOne({_id})
    
    return product;
}

module.exports = getProductCtrl;