const Track = require("../models/Track");
const TrackListener = require("../models/TrackListener");

// @desc Get track
// @route GET /api/track/:idTrack
// @access Public
const getTrack = async (req,res) => {
    const idTrack = req.params.idTrack;
    try{
        const track = await Track.findOne({_id: idTrack}, 'name imgUrl');
        if(track)
            res.status(200).json({message: 'Success', data: track});
        else
            res.status(404).json({message: 'There is no track with given data'});
    } catch(err){
        res.status(500).json({message: 'Server error'})
    }
}

// @desc Get top tracks by number of plays in month
// @route GET /api/tracks/popular
// @access Public
const getPopularTracks = async (req,res) => {
    const actualDate = new Date();
    try{
        const tracks = await TrackListener.find({year: actualDate.getFullYear(), month: actualDate.getMonth()+1}, 'track -_id').populate('track','_id name imgUrl').sort({'plays':'desc'}).limit(5);
        console.log(tracks)
        if(tracks){
            res.status(200).json({message: 'Success', data: tracks});
        } else{
            res.status(404).json({message: 'No tracks'});
        }
    } catch(err){
        res.status(500).json({message: 'Server error'}); 
    }
}

module.exports = {
    getTrack,
    getPopularTracks
}