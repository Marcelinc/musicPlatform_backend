const express = require('express');
const { getTrack, getPopularTracks } = require('../controllers/trackController');

const router = express.Router();

router.get('/track/:idTrack',getTrack);
router.get('/tracks/popular',getPopularTracks);

module.exports = router;