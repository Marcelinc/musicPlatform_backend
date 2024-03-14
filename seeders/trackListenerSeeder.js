const TrackListener = require("../models/TrackListener")

const trackListeners = require('../data/trackListener.json');

const trackListenerSeeder = async () => {
    result = await TrackListener.insertMany(trackListeners);
}

module.exports = trackListenerSeeder;