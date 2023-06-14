const { Router } = require('express');
const { getAllProductsHandler, getProductHandler, postProductHandler, putProductHandler, deleteProductHandler } = require('../handlers');

const productRouter = Router();

productRouter.get('/', getAllProductsHandler);

productRouter.get('/:id', getProductHandler);  

productRouter.post('/', postProductHandler);

productRouter.put('/', putProductHandler);

productRouter.delete('/:id', deleteProductHandler);

module.exports = productRouter;
