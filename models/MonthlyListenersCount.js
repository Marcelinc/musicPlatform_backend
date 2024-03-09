const mongoose = require('mongoose');

const monthlyListenersSchema = mongoose.Schema({
    artist: {
        type: mongoose.Types.ObjectId,
        ref: 'Artist',
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
    listenersCount: {
        type: Number,
        default: 0
    } 
}, {timestamps: true});

module.exports = mongoose.model('MonthlyListenersCount',monthlyListenersSchema);