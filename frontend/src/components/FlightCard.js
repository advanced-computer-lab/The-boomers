import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const FlightCard = (props) => {
    const  flight  = props.flight;

    return(
        <div className="card-container">
            <div style={{width:900}} className="desc">
                
                <h3>{flight.From}</h3>
                <p>{flight.To}</p>
                <p>{flight.Flight_Date}</p>
                <p>{flight.Cabin}</p>
                <p>{flight.Seats_Available_on_Flight}</p>
            </div>
        </div>
    )
};

export default FlightCard;