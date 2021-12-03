
const express = require('express');
const router = express.Router();

// Load Flight model
const Booking = require('../../models/Booking');


router.post('/createBooking', (req, res) => {
  console.log(req.body)
  Booking.create(req.body)
    .then(booking => res.json({ msg: 'Booking added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this booking' }));
});

module.exports = router;