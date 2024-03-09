const mongoose = require('mongoose');

const artistSchema = mongoose.Schema({
    artistName: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: ''
    },
    location: {
        type: mongoose.Types.ObjectId,
        ref: 'Country',
        required: true,
    },
    followers: {
        type: Number,
        default: 0,
    },
    about: {
        type: String,
        default: ''
    },
    tracks: [{
        type: mongoose.Types.ObjectId,
        ref: 'Track',
    }],
    playlists: [{
        type: mongoose.Types.ObjectId,
        ref: 'Playlist',
    }]

}, {timestamps: true});


module.exports = mongoose.model('Artist',artistSchema);