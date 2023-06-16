require('../../db');
const SubCategory = require('../../collections/SubCategory');

const deleteSubcategoryCtrl = async (id) => {
    const deleted = await SubCategory.deleteOne({id})
    
    return deleted;
}

module.exports = deleteSubcategoryCtrl;