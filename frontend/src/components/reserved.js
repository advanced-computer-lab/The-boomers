import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import ReservedCard from './ReservedCard';
=======
import FlightCard from './FlightCard';
>>>>>>> 0b5e29c8b6ab8d6b932d34b19cd5dbfbfd326cf1


class reserved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reserved_flights: []
    };
  }


<<<<<<< HEAD
  componentDidMount() {
    axios
      .get('http://localhost:8082/api/booking')
      .then(res => {
        this.setState({
          reserved_flights: res.data
      
        })
      })
      .catch(err =>{
        console.log(err.message);
=======
  //NEED TO REPLACE THIS WITH A POST REQUEST TO GET RESERVED FLIGHTS FOR CURRENT USER
  componentDidMount() {
   console.log(this.props.location.flightData)
    axios
      .post('http://localhost:8082/api/flights/search', this.props.location.flightData)
      .then(res => {
        this.setState({
            reserved_flights: res.data
        })
      })
      .catch(err =>{
        console.log('Error from search_results');
>>>>>>> 0b5e29c8b6ab8d6b932d34b19cd5dbfbfd326cf1
      })
  };


  render() {
    const reserved_flights = this.state.reserved_flights;
    console.log("Print Reserved_Flight: " + reserved_flights);
    let reserved_flightList;

    if(!reserved_flights) {
        reserved_flightList = "there is no flight record!";
    } else {
        reserved_flightList = reserved_flights.map((reserved_flight, k) =>
<<<<<<< HEAD
        <ReservedCard reserved_flight={reserved_flight} />
=======
        <FlightCard reserved_flight={reserved_flight} key={k} />
>>>>>>> 0b5e29c8b6ab8d6b932d34b19cd5dbfbfd326cf1
      );
    }

    return (
      <div className="background">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Reserved Flights</h2>
            </div>
            <div className="col-md-11">
              <Link to="/UserPortal" className="btn btn-outline-warning float-right">
                My profile
              </Link>
              <Link to="/AdminPortal/search" className="btn btn-outline-warning float-right">
               Reserve new flight
              </Link>
              <br />
             
              
             
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {reserved_flightList}
          </div>
        </div>
      </div>
    );
  }
}

export default reserved;