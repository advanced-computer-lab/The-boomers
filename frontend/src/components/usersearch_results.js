import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserFlightCard from './UserFlightCard';
import { FaBox } from 'react-icons/fa';


class usersearch_results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: []
    };
  }

  componentDidMount() {
   console.log(this.props.location.flightData)
    axios
      .post('http://localhost:8082/api/flights/search', this.props.location.flightData)
      .then(res => {
        this.setState({
          flights: res.data
        })
      })
      .catch(err =>{
        console.log('Error from usersearch_results');
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
        <UserFlightCard flight={flight} key={k} onClick = {()=>this.props.history.push({
          pathname:`/UserPortal/showflight/${flight._id}`,
          return : false,
          flightData: this.props.location.flightData})}/>
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
            <h2 className="display-4 text-center">search results</h2>
            <div className="col-md-11">
             
              <Link to="/UserPortal/usersearch" className="btn btn-outline-warning float-right">
               Search..
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

export default usersearch_results;