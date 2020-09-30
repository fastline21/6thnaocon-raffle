const express = require('express');
const router = express.Router();

// Participant API
router.use('/participant', require('./participant'));

// Winner API
router.use('/winner', require('./winner'));

module.exports = router;
