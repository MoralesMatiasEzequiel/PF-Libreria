require('../../db');
const Subcategory = require('../../collections/SubCategory');

const getSubcategoriesCtrl = async () => {
    const subcategories = await Subcategory.find();

    return subcategories;
};

module.exports = getSubcategoriesCtrl;