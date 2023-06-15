const { Router } = require('express');

const { getSubcategoryHandler, postSubcategoryHandler, putSubcategoryHandler } = require('../handlers/subcategoryHandlers/indexHandlers');

const subcategoryRouter = Router();

subcategoryRouter.get('/', getSubcategoryHandler);

subcategoryRouter.post('/', postSubcategoryHandler);

subcategoryRouter.put('/', putSubcategoryHandler);

module.exports = subcategoryRouter;