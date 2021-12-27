import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const ReservedCard = (props) => {
    const  booking  = props.reserved_flight;
    const departure = props.depFlight;
    const user = props.user
    function sendEmail(){
        var emailText = `Your booking: (${departure.departure_airport}) to (${departure.arrival_airport}) `;
        let mailOptions = {
          from: 'fflyairlines@gmail.com',
          to: user.Email,
          subject: 'Booking Cancelation',
          text: emailText,
          html: `<p> ${emailText}</p>`,
        };
        axios.post('http://localhost:8000/sendMail', mailOptions)
          .then(res => {
            console.log(res.data);
          })
          .catch(err => console.log(err));
    }

    return(
        <div className="card-container">
            <div className="desc">
                <p>Booking ID : {booking._id}</p>
                 <p>Arrival Date : {departure.arrival_date}</p>
                <p>Arrival Time : {departure.arrival_time}</p>
                <p>Departure Date: {departure.departure_date}</p>
                <p>Departure Time: {departure.departure_time}</p>
                <p>Arrival Airport :  {departure.arrival_airport}</p>
                <p>Departure Airport : {departure.departure_airport}</p>
                <p><Link to={`cancel_reservation/${booking._id}`}>Cancel reservation</Link> </p> 
                <p><Link to={`/editseats/${booking._id}`}>change seats</Link> </p> 
                <p><Link to={`/editdepart/${booking._id}`}>Edit Depart Flight</Link> </p> 
                <p><Link to={`/editreturn/${booking._id}`}>Edit Return Flight</Link> </p> 
                <p><Link onClick={() => sendEmail()}>Email me itirenary</Link> </p> 
            </div>
        </div>
    )
};

export default ReservedCard;