const { Router } = require('express');
const adminRouter = require('./adminRoutes');

const router = Router();


router.use('/admin', adminRouter);


module.exports = router;