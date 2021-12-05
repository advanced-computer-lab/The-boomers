// models/Flight.js

const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
  flight_number: {
    type: String,
    required: false
  },
  departure_date: {
    type: String,
    required: true
  },
  arrival_date: {
    type: String,
    required: false
  },
  departure_airport: {
    type: String,
    required: true
  },
  arrival_airport: {
    type: String,
    required: true
  },
  airport_terminal:{
    type: String,
    required: false
  },
  departure_time:{
    type: String,
    required: false
  },
  arrival_time:{
    type: String,
    required: false
  },
  cabin:{
    type : String,
    required: true
  },
  SeatsBooked:{
    type: Array,
    required: false,
  },
  SeatsAvailable:{
    type: Number, 
    required: true
  },
  Price:{
    type: Number,
    required: false
  },
  BaggageAllowance:{
    type: Number, 
    required: false
  }

});

module.exports = Flight = mongoose.model('flight', FlightSchema);