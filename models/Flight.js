// models/Flight.js

const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
  From: {
    type: String,
    required: true
  },
  To: {
    type: String,
    required: true
  },
  
  Cabin: {
    type: String,
    required: true
  },

  Flight_Date: {
    type: String,
    required: true
  },

  Seats_Available_on_Flight: {
    type: String,
    required: true
  },
 
});

module.exports = Flight = mongoose.model('flight', FlightSchema);