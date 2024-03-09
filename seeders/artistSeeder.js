const Artist = require('../models/Artist');
const artistList = require('../data/artists.json');

const seedArtists = async () => {
    result = await Artist.insertMany(artistList);
}

module.exports = seedArtists;