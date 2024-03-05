const artistList = require('../models/Artists');


// @desc Get artists
// @route GET /api/artists
// @access Public
const getArtists = async (req,res) => {
    //get artists, for now from file
    res.status(200).json({message: 'Success', data: artistList});
}

module.exports = {
    getArtists
};