const Country = require('../models/Country');

const Countries = require('../data/countries.json');

const seedCountry = async () => {
    result = await Country.insertMany(Countries);
}

module.exports = seedCountry;