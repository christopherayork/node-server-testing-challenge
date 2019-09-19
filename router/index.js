const express = require('express');
const router = express.Router();
const charAPI = require('../characters/characters-api');

router.use(express.json());
router.use('/characters', charAPI);
// add more routes as needed

module.exports = router;