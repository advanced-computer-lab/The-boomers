import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReservedCard from './ReservedCard';
class reserved extends Component {
  constructor(props) {
    super(props);
    this.state = {
        bookings : [], 
        departFlights : [],
        returnFlights : [],
        user: ''
    }; 
  }
  async componentDidMount(){
    console.log(localStorage.getItem('userID'))
    const res = await axios.post('http://localhost:8082/user', {id: localStorage.getItem('userID')});
    this.setState({user: res.data[0]});
    const arr = [];
    const arr2 = [];
    const arr3 = [];
    for (let i = res.data[0].Bookings.length-1; i >=0 ; i--) {
      let res2 = await axios.get('http://localhost:8082/api/booking/' + res.data[0].Bookings[i])
      if (!res2) {
        console.log('in if statement')
        continue;
      }
      arr.push(res2.data);
        let res3 = await axios.get('http://localhost:8082/api/flights/' + res2.data.departureFlightID )
        arr2.push(res3.data);
        let res4 = await axios.get('http://localhost:8082/api/flights/' +  res2.data.returnFlightID )
        arr3.push(res4.data);
    }
    console.log('Bookings: ', arr)
    console.log('Dep: ', arr2)
    console.log('Ret: ', arr3)
    this.setState({bookings: arr})
    this.setState({departFlights: arr2})
    this.setState({returnFlights: arr3})
  };

  render() {
    const reserved_flights = this.state.bookings;
    const reserved_departure = this.state.departFlights;
    const reserved_return = this.state.returnFlights;

    let reserved_flightList;
    if(!reserved_flights || !reserved_departure || !reserved_return) {
        reserved_flightList = "there is no flight record!";
    } else {
        console.log(this.state.departFlights)
        console.log(this.state.returnFlights)
        reserved_flightList = reserved_flights.map((reserved_flight, k) =>
        <ReservedCard reserved_flight={reserved_flight} depFlight={this.state.departFlights[k]} retFlight={this.state.returnFlights[k]}/> 
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