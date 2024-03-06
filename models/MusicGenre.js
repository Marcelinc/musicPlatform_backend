const mongoose = require('mongoose');

const musicGenreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    key: {
        type: String,
        required: true,
        unique: true,
    }
})

module.exports = mongoose.model('MusicGenre', musicGenreSchema);