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
      bookings: [],
      flights: [],
      depID: '',
      returnID: ''
    };
  }

  componentDidMount() {
    axios
    .post('http://localhost:8082/user', {
      id: localStorage.getItem('userID')
    })
    .then(res => {
      this.setState({bookings: res.data[0].Bookings})
    })
    .catch(err =>{
      console.log('Error from confirm');
    })
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
            flights: array,
            depID: this.props.location.depID,
            returnID: this.props.location.flightID
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

    const handleSubmit = () => {
      axios
      .post('http://localhost:8082/api/booking/createBooking', {
        departureFlightID: this.state.flights[0]._id,
        returnFlightID: this.state.flights[1]._id,
        PassCount: this.props.location.passengerCount,
        userID: localStorage.getItem('userID')
      })
      .then(res => {
        this.props.history.push({
          pathname: '/seats',
          bookingData: {
             depID: this.state.flights[0]._id , 
              returnID: this.state.flights[1]._id,
             passCount: this.props.location.passengerCount,
             userID: localStorage.getItem('userID'),
             bookingID: res.data._id
          }
        });
        const arr = this.state.bookings.slice()
        arr.push(res.data._id)
        const data = {
          Bookings: arr
        }
        axios.put('http://localhost:8082/updateUser/' + localStorage.getItem('userID'), data)
          .then(result=> {
        })
          .catch(err => console.log(err));
      })
      .catch(err =>{
        console.log('Error from confirm');
      })
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
          <div style={{height: 100, width: '100%', backgroundColor:'#000'}}>
            <div style={{height: 100, width: 120, backgroundColor:'#fff', cursor: 'pointer'}} onClick={() => handleSubmit()}>
                <label style={{textAlign: 'center', color:'#000'}}>Sumbit</label>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default confirm;