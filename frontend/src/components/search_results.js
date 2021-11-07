import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FlightCard from './FlightCard';


class search_results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: []
    };
  }

  componentDidMount() {
    axios
      .post('http://localhost:8082/api/flights/search', this.props.location.flightData)
      .then(res => {
        this.setState({
          flights: res.data
        })
      
      })
      .catch(err =>{
        console.log('Error from ShowFlightList');
      })
  };


  render() {
    const flights = this.state.flight;
    console.log("PrintFlight: " + flights);
    let flightList;

   if(!flights) {
     flightList = "there is no flight record!";
    } else {
      flightList = flights.map((flight, l) =>
        <FlightCard flight={flight} key={l} />
     );
    }
    return (
      <div className="ShowFlightList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Admin Portal </h2>
            </div>
            <h2 className="display-4 text-center">Search results </h2>
            <div className="col-md-11">
              <Link to="/AdminPortal" className="btn btn-outline-warning float-right">
              Back to portal
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {flightList}
          </div>
        </div>
      </div>
    );
  }
}

export default search_results;