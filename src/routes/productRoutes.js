const { Router } = require('express');

const postProductHandler = require('../handlers/productHandlers/postProductHandler');

const productRouter = Router();

productRouter.post('/', postProductHandler);

module.exports = productRouter;