const { Router } = require('express');
const reviewRouter = Router();
const { postReviewHandler, getReviewsHandler } = require('../handlers/reviewHandlers/indexHandlers');

reviewRouter.post('/', postReviewHandler);
reviewRouter.get('/', getReviewsHandler);

module.exports = reviewRouter;