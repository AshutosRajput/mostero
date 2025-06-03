const express = require('express');
const router = express.Router();
const { rollDice } = require('../controllers/gameController');

router.post('/roll', rollDice);

module.exports = router;
