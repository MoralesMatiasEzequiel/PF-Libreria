const Category = require('../../collections/Category');

const createCategory = async(name, subcategories) => {
    
    const newCategory = {
        name,
        subcategories
    }

    const createdCategory = await Category.create(newCategory);

    return createdCategory;
};

module.exports = createCategory;