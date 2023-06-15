const { Router } = require('express');
const adminRouter = require('./adminRoutes');
const userRouter = require('./userRoutes');
const productRouter = require('./productRoutes');
const categoryRouter = require('./categoryRoutes');

const router = Router();

router.use('/admin', adminRouter);
router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/category', categoryRouter);

module.exports = router;