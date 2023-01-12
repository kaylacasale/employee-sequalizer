const router = require('express').Router();
const companyRoutes = require('./employeeRoutes');

router.use('/company', companyRoutes);

module.exports = router;