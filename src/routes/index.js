const { Router } = require('express');
const adminRouter = require('./adminRoutes');
const userRouter = require('./userRoutes');

const router = Router();


router.use('/admin', adminRouter);
router.use('/user', userRouter);



module.exports = router;