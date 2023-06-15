const { Router } = require('express');

const { postCategoryHandler } = require('../handlers/categoryHandlers/indexHandlers')

const categoryRouter = Router();

categoryRouter.post('/', postCategoryHandler);

module.exports = categoryRouter;