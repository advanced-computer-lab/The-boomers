
// app.js

const express = require('express');
//const connectDB = require('./config/db');
var cors = require('cors');

require("dotenv").config({ path: "./config.env" });
  const MongoURI = process.env.ATLAS_URI
  
  const mongoose = require('mongoose');
  mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result =>console.log("MongoDB is now connected") )
.catch(err => console.log(err));
const flights = require('./routes/api/flights');

const app = express();

// Connect Database
//connectDB();


app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/flights', flights);


const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));