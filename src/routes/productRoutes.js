const { Router } = require('express');

const postProductHandler = require('../handlers/productHandlers/postProductHandler');

const productRouter = Router();

productRouter.post('/', postProductHandler(req, res));

module.exports = productRouter;