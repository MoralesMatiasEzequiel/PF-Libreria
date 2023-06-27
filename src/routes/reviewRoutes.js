const { Router } = require('express');
const reviewRouter = Router();
const { postReviewHandler } = require('../handlers/reviewHandlers/indexHandlers');

reviewRouter.post('/', postReviewHandler);

module.exports = reviewRouter;