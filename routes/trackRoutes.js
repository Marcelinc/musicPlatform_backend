const express = require('express');
const { getTrack } = require('../controllers/trackController');

const router = express.Router();

router.get('/track/:idTrack',getTrack);

module.exports = router;