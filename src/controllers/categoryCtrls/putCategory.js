require('../../db');
const Category = require('../../collections/Category');

const putCategoryCtrl = async (_id, name, subcategories) => {

    const updated = await Category.updateOne({_id}, {$set: {name, subcategories}});

    return updated;
};

module.exports = putCategoryCtrl;