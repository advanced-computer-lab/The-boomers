import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ReservedCard = (props) => {
    const  booking  = props.reserved_flight;
    const departure = props.depFlight;
    return(
        <div className="card-container">
            <div className="desc">
                <p>Booking ID : {booking._id}</p>
                 {/* <p>Arrival Date : {departure.arrival_date}</p>
                <p>Arrival Time : {props.depFlight.arrival_time}</p>
                <p>Departure Date: {props.depFlight.departure_date}</p>
                <p>Departure Time: {props.depFlight.departure_time}</p>
                <p>Arrival Airport :  {props.depFlight.arrival_airport}</p>
                <p>Departure Airport : {props.depFlight.departure_airport}</p> */}
                <p><Link to={`cancel_reservation/${booking._id}`}>Cancel reservation</Link> </p> 
                <p><Link to={`/editseats/${booking._id}`}>change seats</Link> </p> 
            </div>
        </div>
    )
};

export default ReservedCard;