const Product = require('../../collections/Product');

const createProduct = async (name, brand, stock, price, salePrice, image, description, rating, categories) => {
  
    const newProduct = {
      name,
      brand,
      stock,
      price,
      salePrice,
      image,
      description,
      rating,
      categories
    }

    const createdProduct = await Product.create(newProduct);

    return createdProduct;
};

module.exports = createProduct;