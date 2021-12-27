
// app.js
const userController = require('./Routes2/userController.js');
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
const booking = require('./routes/api/booking');
const app = express();

// Connect Database
//connectDB();

0
app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));
app.post('/user',userController.getUser);
app.post("/login", userController.login);
app.put("/updateUser/:userID", userController.updateUser)
app.use('/api/flights', flights);
app.use('/api/booking', booking);
app.post("/createuser", userController.createUser);
app.post("/ChangePassword", userController.changePassword)
app.post("/sendMail", userController.sendMail);
const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));
