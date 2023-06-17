const getProductsHandler = require('./getProductsHandler');
const getProductByIdHandler = require('./getProductByIdHandler');
const getProductsFilteredHandler = require('./getProductsFilteredHandler');
const postProductHandler = require('./postProductHandler');
const putProductHandler = require('./putProductHandler');
const deleteProductHandler = require('./deleteProductHandler');


module.exports = {
    getProductsHandler,
    getProductByIdHandler,
    getProductsFilteredHandler,
    postProductHandler,
    putProductHandler,
    deleteProductHandler
}