const { Router } = require('express');
const { getUsersHandler, postUserHandler, putUserHandler, deleteUserHandler } = require('../handlers/userHandlers/indexHandlers');

const userRouter = Router();

userRouter.get('/', getUsersHandler);

userRouter.post('/', postUserHandler);

userRouter.put('/', putUserHandler);

userRouter.delete('/:id', deleteUserHandler);


module.exports = userRouter;