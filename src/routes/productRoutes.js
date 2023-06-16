const { Router } = require('express');

const { getProductsHandler, getProductByIdHandler, getProductsByNameHandler,postProductHandler, putProductHandler, deleteProductHandler} = require('../handlers/productHandlers/indexHandlers')

const productRouter = Router();

productRouter.get('/', async (req, res) => {
    
    const { name } = req.query;

    if (name) {
        return getProductsByNameHandler(req, res);
    }

    return getProductsHandler(req, res);
});

productRouter.get('/:id', getProductByIdHandler);  

productRouter.post('/', postProductHandler);

productRouter.put('/', putProductHandler);

productRouter.delete('/:id', deleteProductHandler);

module.exports = productRouter;