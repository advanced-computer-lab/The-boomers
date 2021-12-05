
const express = require('express');
const router = express.Router();

// Load Flight model
const Booking = require('../../models/Booking');

router.get('/:id', (req, res) => {
  Booking.findById(req.params.id)
    .then(booking => res.json(booking))
    .catch(err => res.status(404).json({ noflightfound: 'No Flight found' }));
});

router.post('/createBooking', (req, res) => {
  console.log(req.body)
  Booking.create(req.body)
    .then(booking => res.send(booking))
    .catch(err => res.status(400).json({ error: 'Unable to add this booking' }));
});

module.exports = router;