require('../../db');
const Product = require('../../collections/Product');

const getProductsFilteredAllCtrl = async (name, brand, subcategories) => {
  
  const query = {};
  
  if (name) {
    query.name = { $regex: name, $options: 'i' };
  }

  if (brand) {

    const brands = Array.isArray(brand) ? brand : [brand];
    query.brand = { $in: brands };

  }

  if (subcategories) {
    const subcategoriesArray = Array.isArray(subcategories) ? subcategories : [subcategories];
    query.subcategories = { $in: subcategoriesArray };
  }

  const productsFiltered = await Product.find(query);
  return productsFiltered;
};

module.exports = getProductsFilteredAllCtrl;