const Product = require('../../collections/Products'); // Importa el modelo de producto definido con Mongoose

const createProduct = async (name, brand, stock, price, image, description) => {
  
    const newProduct = {
      name,
      brand,
      stock,
      price,
      image,
      description
    }

    const createdProduct = await Product.create(newProduct);

    return createdProduct;
};

module.exports = createProduct;