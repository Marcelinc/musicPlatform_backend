const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 4000;

const app = express();

//Connect to DB
connectDB();

//Seeders
//const seedCountry = require('./seeders/countrySeeder');
//seedCountry

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Routes
app.use('/api',require('./routes/artistRoutes'));

app.listen(PORT,() => console.log('Server is up and running on port ' + PORT));