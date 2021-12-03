// models/Booking.js

const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    departureFlightID:{
        type: String,
        required: true,
      },
      returnFlightID:{
          type: String,
          required: true,
      },
      PassCount:{
          type: Number,
          required: true,
      },
      userID:{
          type: String,
          required: true,
      },
      departureFlightSeats:{
          type: Array,
          required: false,
      },
      returnFlightSeats:{
          type: Array,
          required: false,
      }
  

});

module.exports = Booking = mongoose.model('Booking', BookingSchema);