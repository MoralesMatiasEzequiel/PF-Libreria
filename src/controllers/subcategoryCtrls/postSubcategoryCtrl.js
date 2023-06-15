const Subcategory = require('../../collections/SubCategory');

const createSubcategory = async (name, categories) => {
  
    const newSubcategory = {
      name,
      categories
    }

    const createdSubcategory = await Subcategory.create(newSubcategory);

    return createdSubcategory;
};

module.exports = createSubcategory;