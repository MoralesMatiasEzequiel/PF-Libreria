const { Router } = require('express');

const adminRouter = Router();

adminRouter.get('/', async (req, res) => {
    
    res.send('dashboard del admin');
});

adminRouter.get('/:id', async (req, res) => {
    
    res.send('Ruta GET/:id');
});  

adminRouter.post('/', async (req, res) => {
    
    res.send('Ruta POST');
});

adminRouter.put('/', async (req, res) => {
    
    res.send('Ruta PUT');
});

adminRouter.delete('/:id', async (req, res) => {
    
    res.send('Ruta DELETE');
});


module.exports = adminRouter;
