const Product = require('../../collections/Product');

const createProduct = async (name, brand, stock, price, salePrice, image, description, rating, active, subcategories) => {
  
    const newProduct = {
      name,
      brand,
      stock,
      price,
      salePrice,
      image,
      description,
      rating,
      active,
      subcategories
    }

    const createdProduct = await Product.create(newProduct);

    return createdProduct;
};

module.exports = createProduct;