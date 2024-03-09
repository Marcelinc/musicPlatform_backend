const express = require('express');
const { getArtists, getTopMonthArtists } = require('../controllers/artistController');

const router = express.Router();

router.get('/artists',getArtists);
router.get('/artists/monthtop',getTopMonthArtists);

module.exports = router;