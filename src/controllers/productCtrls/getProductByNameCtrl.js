require('../../db');
const Product = require('../../collections/Product');

const getProductByNameCtrl = async (name) => {

    if(name){
        const productByName = await Product.findOne({name})
    
        return productByName;
    }
};

module.exports = getProductByNameCtrl;