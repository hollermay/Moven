// rideRoutes.js
const express = require('express');
const { requestRide, getRide } = require('../controllers/rideController');
const router = express.Router();

router.post('/request', requestRide);
router.get('/:id', getRide);

module.exports = router;
