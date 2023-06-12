const { Router } = require('express');

const userRouter = Router();

userRouter.get('/', async (req, res) => {
    
    res.send('dashboard del Usuario');
});

module.exports = userRouter;