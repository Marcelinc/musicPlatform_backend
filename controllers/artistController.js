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
    try{
        const actualDate = new Date();
        const artists = await MonthlyListenersCount.find({year: actualDate.getFullYear(), month: actualDate.getMonth()+1},('artist -_id')).sort('-listenersCount').limit(5).populate('artist');
        if(artists.length > 0)
            res.status(200).json({message: 'Success', data: artists});
    } catch(err){
        res.status(500).json({message: 'Problem with handling request'});
    }
}

// @desc Get artist data
// @route GET /api/artist/:idArtist
// @access Public
const getArtistData = async (req,res) => {
    const idArtist = req.params.idArtist;
    try{
        const artist = await Artist.findOne({_id: idArtist}, '-createdAt -updatedAt').populate('location', '-createdAt -updatedAt').populate('tracks','name imgUrl');
        if(artist)
            res.status(200).json({message: 'Success', data: artist});
        else
            res.status(404).json({message: 'There is no user with given data'});
    } catch(err){
        res.status(500).json({message: 'Server error'});
    }
}

module.exports = {
    getArtists,
    getTopMonthArtists,
    getArtistData
};