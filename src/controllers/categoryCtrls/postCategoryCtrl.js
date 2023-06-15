const Category = require('../../collections/Category');

const createCategory = async(name, subcategories) => {
    
    const newCategory = {
        name,
        subcategories
    }

    const createdCategory = await Category.create(newCategory);

    return createdProduct;
};

module.exports = createCategory;