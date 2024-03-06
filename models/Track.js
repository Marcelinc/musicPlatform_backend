const mongoose = require('mongoose');

const trackSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imgUrl:{
        type: String,
        default: ''
    },
    artist: [{
        type: mongoose.Types.ObjectId,
        ref: 'Artist',
        required: true
    }],
    genre: [{
        type: mongoose.Types.ObjectId,
        ref: 'MusicGenre'
    }],
    plays: {
        type: Number,
        default: 0
    },
    publisher: [{
        type: mongoose.Types.ObjectId,
        ref: 'Publisher'
    }],
    releaseDate: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Track',trackSchema);