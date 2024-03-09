const Track = require("../models/Track");

const tracks =  require("../data/tracks.json");

const trackSeeder = async () => {
    result = await Track.insertMany(tracks);
}

module.exports = trackSeeder;