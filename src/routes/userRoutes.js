const { Router } = require('express');
const { getUserHandler, postUserHandler, putUserHandler, deleteUserHandler } = require('../handlers/userHandlers/indexHandlers');

const userRouter = Router();

userRouter.get('/', getUserHandler);

userRouter.post('/', postUserHandler);

userRouter.put('/', putUserHandler);

userRouter.delete('/:id', deleteUserHandler);


module.exports = userRouter;