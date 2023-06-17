const { Router } = require('express');
const { getProductsHandler, getProductByIdHandler, getProductsFilteredHandler, postProductHandler, putProductHandler, deleteProductHandler } = require('../handlers/productHandlers/indexHandlers');

const productRouter = Router();

productRouter.get('/', async (req, res) => {
  const { name, brand, subcategories } = req.query;

  if (name || brand || subcategories) {
    return getProductsFilteredHandler(req, res);
  }

  return getProductsHandler(req, res);
});

productRouter.get('/:id', getProductByIdHandler);

productRouter.post('/', postProductHandler); // Usa el controlador modificado

productRouter.put('/', putProductHandler);

productRouter.delete('/:id', deleteProductHandler);

module.exports = productRouter;