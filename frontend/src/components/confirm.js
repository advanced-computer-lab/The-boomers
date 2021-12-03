import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserFlightCard from './UserFlightCard';
import { FaBox } from 'react-icons/fa';


class confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: []
    };
  }

  componentDidMount() {
   console.log(this.props.location.depID)
   console.log(this.props.location.flightID)
   const array = [];
    axios
      .post('http://localhost:8082/api/flights/search', {_id: this.props.location.depID})
      .then(res => {
        array.push(res.data[0])
      })
      .catch(err =>{
        console.log('Error from confirm');
      })
      axios
      .post('http://localhost:8082/api/flights/search', {_id: this.props.location.flightID})
      .then(res => {
        array.push(res.data[0])
        console.log(array)
        this.setState({
            flights: array
          })
      })
      .catch(err =>{
        console.log('Error from confirm');
      })
      
      
  };


  render() {
    const flights = this.state.flights;
    console.log("PrintFlight: " + flights);
    let flightList;

    if(!flights) {
      flightList = "there is no flight record!";
    } else {
      flightList = flights.map((flight, k) =>
        <UserFlightCard flight={flight} key={k} />
      );
    }

    return (
      <div className="ShowFlightList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">user Portal </h2>
            </div>
            <h2 className="display-4 text-center">Confirm booking</h2>
            <div className="col-md-11">
             
              
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

export default confirm;