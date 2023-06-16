const { Router } = require('express');

const { getSubcategoryHandler, postSubcategoryHandler, putSubcategoryHandler, deleteSubcategoryHandler } = require('../handlers/subcategoryHandlers/indexHandlers');

const subcategoryRouter = Router();

subcategoryRouter.get('/', getSubcategoryHandler);

subcategoryRouter.post('/', postSubcategoryHandler);

subcategoryRouter.put('/', putSubcategoryHandler);

subcategoryRouter.delete('/:id', deleteSubcategoryHandler);

module.exports = subcategoryRouter;