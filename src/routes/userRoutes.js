const { Router } = require('express');
const { getUserHandler, postUserHandler, putUserHandler } = require('../handlers/userHandlers/indexHandlers');

const userRouter = Router();

userRouter.get('/', getUserHandler);

userRouter.post('/', postUserHandler);

userRouter.put('/', putUserHandler);


module.exports = userRouter;