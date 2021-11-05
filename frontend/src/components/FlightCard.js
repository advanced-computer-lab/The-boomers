import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const FlightCard = (props) => {
    const  flight  = props.flight;

    return(
        <div className="card-container">
            <div className="desc">
                
                <h3>{flight.flight_number}</h3>
                <p>{flight.arrival_date}</p>
                <p>{flight.departure_date}</p>
                <p>{flight.arrrival_airport}</p>
                <p>{flight.departure_airport}</p>
            </div>
        </div>
    )
};

export default FlightCard;