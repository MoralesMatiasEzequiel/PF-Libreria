const Product = require('../../collections/Product');

const createProduct = async (name, brand, stock, price, salePrice, image, description, rating) => {
  
    const newProduct = {
      name,
      brand,
      stock,
      price,
      salePrice,
      image,
      description,
      rating
    }

    const createdProduct = await Product.create(newProduct);

    return createdProduct;
};

module.exports = createProduct;