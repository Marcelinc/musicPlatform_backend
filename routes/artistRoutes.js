const express = require('express');
const { getArtists } = require('../controllers/artistController');

const router = express.Router();

router.get('/artists',getArtists);

module.exports = router;