require('../../db');
const Product = require('../../collections/Product');

const getProductCtrl = async (id) => {
    const productID = await Product.findOne({_id:id})
    
    // console.log(productID);
    return productID;
}

module.exports = getProductCtrl;