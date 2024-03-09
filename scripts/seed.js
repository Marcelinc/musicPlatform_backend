// Seeders
// Use only once when no data

// @Countries
const seedCountry = require('../seeders/countrySeeder');

// @Artists
const seedArtists = require('../seeders/artistSeeder');

// @Music genres
const musicGenreSeeder = require('../seeders/musicGenreSeeder');

// @Publishers
const publisherSeeder = require('../seeders/publisherSeeder');

// @Tracks
const trackSeeder = require('../seeders/trackSeeder');

// @Monthly Listeners
const seedMonthlyListeners = require('../seeders/monthlyListenersSeeder');

//Execute seeders
const seedDB = () => {
    //seedCountry();
    //seedArtists();
    //musicGenreSeeder();
    //publisherSeeder();
    //trackSeeder();
    //seedMonthlyListeners();
}

module.exports = {seedDB};