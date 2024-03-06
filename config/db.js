const mongoose = require('mongoose');

const connectDB = () => {
    console.log('url:',process.env.MONGODB_URL)
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('Connected to db'))
    .catch(err => console.log('Error connecting to db: ' + err));
}

module.exports = connectDB;