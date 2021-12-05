
const express = require('express');
const router = express.Router();

// Load Flight model
const Flight = require('../../models/Flight');

// @route GET api/flights/test
// @description tests flights route
// @access Public
router.get('/test', (req, res) => res.send('flights route testing!'));

// @route GET api/flights
// @description Get all flights
// @access Public
router.get('/', (req, res) => {
  Flight.find()
    .then(flights => res.json(flights))
    .catch(err => res.status(404).json({ noflightsfound: 'No Flights found' }));
});

// @route GET api/flights/:id
// @description Get single flight by id
// @access Public
router.get('/:id', (req, res) => {
  Flight.findById(req.params.id)
    .then(flight => res.json(flight))
    .catch(err => res.status(404).json({ noflightfound: 'No Flight found' }));
});

// @route GET api/flights
// @description add/save flight
// @access Public
router.post('/', (req, res) => {
  console.log(req.body)
  Flight.create(req.body)
    .then(flight => res.json({ msg: 'Flight added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this flight' }));
});

// @route GET api/flights/:id
// @description Update flight
// @access Public
router.put('/:id', (req, res) => {
  Flight.findByIdAndUpdate(req.params.id, req.body)
    .then(flight => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/flights/:id
// @description Delete flight by id
// @access Public
router.delete('/:id', (req, res) => {
  Flight.findByIdAndRemove(req.params.id, req.body)
    .then(flight => res.json({ mgs: 'Flight entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a flight' }));
});



router.post('/search', (req, res) => {
  console.log(req.body)
  Flight.find(   { $or:[
    { flight_number: req.body.flight_number},
    { _id: req.body._id},
    {departure_time: req.body.departure_time},
    {arrival_time: req.body.arrival_time},
    {departure_date: req.body.departure_date},
    {arrival_date: req.body.arrival_date},
    {airport_terminal: req.body.airport_terminal},
    {departure_airport: req.body.departure_airport},
    {arrival_airport: req.body.arrival_airport},
    {cabin: req.body.cabin},
  ]}
  ).then(result => res.send(result))
  .catch(err => console.error(err));

});

module.exports = router;