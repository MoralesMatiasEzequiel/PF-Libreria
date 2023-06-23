const { Router } = require('express');
const { getUsersHandler, getUserByEmailHandler, getUsersByNameHandler, postUserHandler, putUserHandler, deleteUserHandler } = require('../handlers/userHandlers/indexHandlers');

const userRouter = Router();

userRouter.get('/', async (req, res) => {
    
    const { username } = req.query;
    const { email } = req.query;

    if (username) {
        return getUsersByNameHandler(req, res);
    }

    if (email) {
        return getUserByEmailHandler(req, res);
    }

    return getUsersHandler(req, res);
});

userRouter.post('/', postUserHandler);

userRouter.put('/', putUserHandler);

userRouter.delete('/:id', deleteUserHandler);


module.exports = userRouter;