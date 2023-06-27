const { Router } = require('express');
const adminRouter = require('./adminRoutes');
const userRouter = require('./userRoutes');
const productRouter = require('./productRoutes');
const subcategory = require('./subcategoryRoutes');
const mercadoPagoRouter = require('./mercadoPagoRoutes');
const orderFormRouter = require('./orderFormRoutes');
const reviewRouter = require('./reviewRoutes');

const router = Router();

router.use('/admin', adminRouter);
router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/subcategory', subcategory);
router.use('/mercadopago', mercadoPagoRouter);
router.use('/orders', orderFormRouter);
router.use('/review', reviewRouter);
router.use('/', (req, res) => {res.send('Hola soy el back!')});

module.exports = router;