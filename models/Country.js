const mongoose = require('mongoose');

const countrySchema = mongoose.Schema({
    name: {
        type: String,
    },
    countryCode: {
        type: String,
        unique: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Country', countrySchema); 