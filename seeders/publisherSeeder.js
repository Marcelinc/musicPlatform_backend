const Publisher = require("../models/Publisher");

const publishers = require('../data/publishers.json');

const publisherSeeder = async () => {
    result = await Publisher.insertMany(publishers);
}

module.exports = publisherSeeder;