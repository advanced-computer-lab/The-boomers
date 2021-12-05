
const express = require('express');
const router = express.Router();

// Load Flight model
const Booking = require('../../models/Booking');

router.get('/:id', (req, res) => {
  Booking.findById(req.params.id)
    .then(booking => res.json(booking))
    .catch(err => res.status(404).json({ noflightfound: 'No Flight found' }));
});



router.get('/', (req, res) => {
  Booking.find()
    .then(booking => res.json(booking))
    .catch(err => res.status(404).json({ noflightsfound: err.message  }));
});



router.post('/createBooking', (req, res) => {
  console.log(req.body)
  Booking.create(req.body)
    .then(booking => res.send(booking))
    .catch(err => res.status(400).json({ error: 'Unable to add this booking' }));
});

router.delete('/:id', (req, res) => {
  Booking.findByIdAndRemove(req.params.id, req.body)
    .then(booking => res.json({ mgs: 'Booking entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a Booking' }));
});
module.exports = router;