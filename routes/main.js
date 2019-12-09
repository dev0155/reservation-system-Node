let router = require('express').Router();
let RegisterRouter = require('./register-router');

router.use('/register', RegisterRouter);

module.exports = router;