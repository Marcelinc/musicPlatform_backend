const express = require('express');
const { getArtists, getTopMonthArtists, getArtistData } = require('../controllers/artistController');

const router = express.Router();

router.get('/artists',getArtists);
router.get('/artists/monthtop',getTopMonthArtists);
router.get('/artist/:idArtist',getArtistData);

module.exports = router;