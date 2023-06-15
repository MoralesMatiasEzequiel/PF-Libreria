const { Router } = require('express');

const { getCategoryHandler, postCategoryHandler, putCategoryHandler } = require('../handlers/categoryHandlers/indexHandlers')

const categoryRouter = Router();

categoryRouter.get('/', getCategoryHandler);

categoryRouter.post('/', postCategoryHandler);

categoryRouter.put('/', putCategoryHandler);

module.exports = categoryRouter;