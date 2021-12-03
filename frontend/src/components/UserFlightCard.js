import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const UserFlightCard = (props) => {
    const  flight  = props.flight;

    return(
        <div className="card-container">
            <div className="desc">

                <p>Flight Number : {flight.flight_number}</p>
                <p>Arrival Date : {flight.arrival_date}</p>
                <p>Arrival Time : {flight.arrival_time}</p>
                <p>Departure Date: {flight.departure_date}</p>
                <p>Departure Time: {flight.departure_time}</p>
                <p>Arrival Airport :  {flight.arrival_airport}</p>
                <p>Airport Terminal : {flight.airport_terminal}</p>
                <p>Departure Airport : {flight.departure_airport}</p>
              
            <p onClick = {props.onClick}>  Show Details </p>
            </div>
        </div>
    )
};

export default UserFlightCard;