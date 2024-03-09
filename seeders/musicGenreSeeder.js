const MusicGenre = require('../models/MusicGenre');

const genres = require('../data/musicGenres.json')

const musicGenreSeeder = async () => {
    result =  await MusicGenre.insertMany(genres);
}

module.exports = musicGenreSeeder;