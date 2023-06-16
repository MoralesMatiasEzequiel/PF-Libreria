require('../../db');
const Product = require('../../collections/Product');

const deleteProductCtrl = async (id) => {
    const deleted = await Product.deleteOne({id})
    
    return deleted;
}

module.exports = deleteProductCtrl;