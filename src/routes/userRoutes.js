const { Router } = require('express');
const { getUsersHandler, getUsersByNameHandler, postUserHandler, putUserHandler, deleteUserHandler } = require('../handlers/userHandlers/indexHandlers');

const userRouter = Router();

// userRouter.get('/', async (req, res) => {
    
//     const { username } = req.query;

//     if (username) {
//         return getUsersByNameHandler(req, res);
//     }

//     return getUsersHandler(req, res);
// });

userRouter.post('/', postUserHandler);

userRouter.put('/', putUserHandler);

userRouter.delete('/:id', deleteUserHandler);


module.exports = userRouter;