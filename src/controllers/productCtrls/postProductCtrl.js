const Product = require('../../collections/Product');

const postProductCtrl = async (name, brand, stock, price, salePrice, image, description, active, subcategories) => {
  
    const newProduct = {
      name,
      brand,
      stock,
      price,
      salePrice,
      image,
      description,
      active,
      subcategories
    }

    const createdProduct = await Product.create(newProduct);

    return createdProduct;
};

module.exports = postProductCtrl;