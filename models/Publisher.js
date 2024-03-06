const mongoose = require('mongoose');

const publisherSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Publisher', publisherSchema);