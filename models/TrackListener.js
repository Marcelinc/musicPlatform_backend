const mongoose = require('mongoose');

const trackListenerSchema = mongoose.Schema({
    track: {
        type: mongoose.Types.ObjectId,
        ref: 'Track',
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    month: {
        type: Number,
        required: true
    },
    plays: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('TrackListener',trackListenerSchema);