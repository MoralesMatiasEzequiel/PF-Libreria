require('../../db');
const Category = require('../../collections/Category');

const getCategoryCtrl = async () => {
    const categories = await Category.find()
    
    return categories;
}

module.exports = getCategoryCtrl;