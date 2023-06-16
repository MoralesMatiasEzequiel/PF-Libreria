const getProductsHandler = require('./getProductsHandler');
const getProductByIdHandler = require('./getProductByIdHandler');
const getProductsByNameHandler = require('./getProductsByNameHandler');
const postProductHandler = require('./postProductHandler');
const putProductHandler = require('./putProductHandler');
const deleteProductHandler = require('./deleteProductHandler');


module.exports = {
    getProductsHandler,
    getProductByIdHandler,
    getProductsByNameHandler,
    postProductHandler,
    putProductHandler,
    deleteProductHandler
}