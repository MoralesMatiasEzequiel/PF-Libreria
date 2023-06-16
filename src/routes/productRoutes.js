const { Router } = require('express');

const { getAllProductsHandler, getProductHandler, getProductsByNameHandler,postProductHandler, putProductHandler, deleteProductHandler} = require('../handlers/productHandlers/indexHandlers')

const productRouter = Router();

productRouter.get('/', async (req, res) => {
    
    const { name } = req.query;

    if (name) {
        return getProductsByNameHandler(req, res);
    }

    return getAllProductsHandler(req, res);
});

productRouter.get('/:id', getProductHandler);  

productRouter.post('/', postProductHandler);

productRouter.put('/', putProductHandler);

productRouter.delete('/:id', deleteProductHandler);

module.exports = productRouter;