import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReservedCard from './ReservedCard';


class reserved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reserved_flights: []
    };
  }


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
        <ReservedCard reserved_flight={reserved_flight} />
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