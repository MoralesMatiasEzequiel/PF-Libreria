require('../../db');
const Subcategory = require('../../collections/SubCategory');

const putSubcategoryCtrl = async (_id, name, categories) => {

    const updated = await Subcategory.updateOne({_id}, {$set: {name, categories}});

    return updated;
};

module.exports = putSubcategoryCtrl;