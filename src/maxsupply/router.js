'use strict';

// Router
const router = require('express').Router();
const maxsupply = require('./index');

// Health
router.get('/', maxsupply.status);

// Export the router
module.exports = router;