const Country = require('../models/Country');

const Countries = [
    {name: '', countryCode: ''},
    {name: 'Poland', countryCode: 'PL'},
    {name: 'Russia', countryCode: 'RU'},
    {name: 'Netherlands', countryCode: 'NL'},
    {name: 'Norway', countryCode: 'NO'},
    {name: 'United Kingdom', countryCode: 'UK'},
    {name: 'France', countryCode: 'FR'}
];

const seedCountry = async countries => {
    result = await Country.insertMany(countries);
}

module.exports = seedCountry(Countries);