const Artist = require('../models/Artist');
const MonthlyListenersCount = require('../models/MonthlyListenersCount');


// @desc Get artists
// @route GET /api/artists
// @access Public
const getArtists = async (req,res) => {
    const artists = await Artist.find().limit(10);
    if(artists.length > 0)
        res.status(200).json({message: 'Success', data: artists});
    else 
        res.status(500).json({message: 'Problem with handling request'});
}

// @desc Get top 5 artists of the month
// @route GET /api/artists/monthtop
// @access Public
const getTopMonthArtists = async (req,res) => {
    const artists = await MonthlyListenersCount.find(null,('artist')).sort('-listenersCount').limit(5).populate('artist');
    if(artists.length > 0)
        res.status(200).json({message: 'Success', data: artists})
    else 
        res.status(500).json({message: 'Problem with handling request'});
}

module.exports = {
    getArtists,
    getTopMonthArtists
};