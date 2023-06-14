const { Router } = require('express');
const { getUserHandler, postUserHandler } = require('../handlers/userHandlers/indexHandlers');


const userRouter = Router();

userRouter.get('/', getUserHandler);

userRouter.post('/', postUserHandler);


module.exports = userRouter;