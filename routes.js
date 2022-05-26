'use strict';

const router = require('express').Router();
const middleware = require('./src/middleware');
const errors = require('./src/errors');
const healthRouter = require('./src/health/router');
const taskRouter = require('./src/tasks/router');
const taskMaxSupply = require('./src/maxsupply/router');

// Wire up middleware
router.use(middleware.doSomethingInteresting);

// Wire up routers
router.use('/vxlcircsupply', healthRouter);
//router.use('/tasks', taskRouter);
router.use('/maxsupply', taskMaxSupply);

// Wire up error-handling middleware
router.use(errors.errorHandler);
router.use(errors.nullRoute);


// Export the router
module.exports = router;
