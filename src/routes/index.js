const { Router } = require('express');
const adminRouter = require('./adminRoutes');
const userRouter = require('./userRoutes');
const productRouter = require('./productRoutes');
const subcategory = require('./subcategoryRoutes');
const mercadoPagoRouter = require('./mercadoPagoRoutes');
const authRouter = require('./authRoutes');

const router = Router();

router.use('/admin', adminRouter);
router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/subcategory', subcategory);
router.use('/mercadopago', mercadoPagoRouter);
router.use('/auth', authRouter);

module.exports = router;