import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import UserFlightCard from './UserFlightCard';


class EditDepartResults extends Component {
  constructor() {
    super();
    this.state = {
      flights: [],
      booking: {}
    };
  }

  async componentDidMount() {
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

  async handleSubmit (id){
    const res = await axios.get('http://localhost:8082/api/booking/'+this.props.match.params.id)
    this.setState({booking: res.data})
    const res2 = await axios.get('http://localhost:8082/api/flights/'+res.data.departureFlightID)
    const arr = res2.data.SeatsBooked
    for(let i = 0; i < res.data.departureFlightSeats.length; i++){
      arr.splice(arr.indexOf(res.data.departureFlightSeats[i]),1)
    }
    axios
        .put('http://localhost:8082/api/Flights/'+res.data.departureFlightID, {SeatsBooked : arr})
        .then(res => {
        })
        .catch(err => {
          console.log("Error in UpdateFlightInfo!");
        })
    axios
        .put('http://localhost:8082/api/booking/'+this.props.match.params.id, {departureFlightID : id, departureFlightSeats: []})
        .then(res => {
          this.props.history.push(`/editseats/${this.props.match.params.id}`)
        })
        .catch(err => {
          console.log("Error in UpdateFlightInfo!");
        })
    // const data = {
    //   flight_number: this.state.flight_number,
    //   departure_date: this.state.departure_date,
    //   departure_time: this.state.departure_time,
    //   arrival_date: this.state.arrival_date,
    //   arrival_time: this.state.arrival_time,
    //   airport_terminal: this.state.airport_terminal,
    // };   
    //     this.props.history.push({
    //         pathname: '/AdminPortal/search_results',
    //         flightData: data})  
  };

 render() {
    const flights = this.state.flights;
    console.log("PrintFlight: " + flights);
    let flightList;

    if(!flights) {
      flightList = "there is no flight record!";
    } else {
      flightList = flights.map((flight, k) =>
        <UserFlightCard flight={flight} key={k} onClick = {() => this.handleSubmit(flight._id)}/>
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

export default EditDepartResults;