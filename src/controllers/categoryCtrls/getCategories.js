require('../../db');
const Category = require('../../collections/Category');

const getCategoriesCtrl = async () => {
    const categories = await Category.find();

    return categories;
};

module.exports = getCategoriesCtrl;