const Track = require("../models/Track");

// @desc Get track
// @route GET /api/track/:trackId
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

module.exports = {
    getTrack
}