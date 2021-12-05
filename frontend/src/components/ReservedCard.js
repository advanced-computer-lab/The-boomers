import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ReservedCard = (props) => {
    const  booking  = props.reserved_flight;

    return(
        <div className="card-container">
            <div className="desc">

                <p>id : {booking._id}</p>
                <p>Arrival Date : {booking.departureFlightID}</p>
                <p>Arrival Time : {booking.returnFlightID}</p>
                <p>Departure Date: {booking.PassCount}</p>
                <p>Departure Time: {booking.userID}</p>
                <p>Arrival Airport :  {booking.departureFlightSeats}</p>
                <p>Airport Terminal : {booking.returnFlightSeats}</p>
                <p>Departure Airport : {booking.__V}</p>
                <p>    <Link to={`UserPortal/cancel_reservation/${booking._id}`}>Cancel reservation</Link> </p>

            </div>
        </div>
    )
};

export default ReservedCard;