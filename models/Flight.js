// models/Flight.js

const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
  flight_number: {
    type: String,
    required: true
  },
  departure_date: {
    type: String,
    required: true
  },
  arrival_date: {
    type: String,
    required: true
  },
  departure_airport: {
    type: String,
    required: true
  },
  arrival_airport: {
    type: String,
    required: true
  },
  economy_count: {
    type: String,
    required: true
    
  },
  buisiness_count: {
    type: String,
    required: true
  },
  airport_terminal:{
    type: String,
    required: true
  },
  departure_time:{
    type: String,
    required: true
  },
  arrival_time:{
    type: String,
    required: true
  },
  EcoavailableChildren:{
    type: String,
    required: true
  },
  BuiavailableAdults:{
    type: String,
    required: true
  },
  EcoavailableAdults:{
    type: String,
    required: true
  },

  BuiavailableChildren:{
    type: String,
    required: true
  },

});

module.exports = Flight = mongoose.model('flight', FlightSchema);