import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserFlightCard from './UserFlightCard';
import { FaBox } from 'react-icons/fa';


class seats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      booking: {},
      depFlight: {},
      returnFlight: {},
      seatsBookedDep: [],
      seatsBookedReturn: [],
    };
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:8082/api/booking/'+this.props.location.bookingData.bookingID)
    this.setState({booking: res})
    const res2 = await axios.get('http://localhost:8082/api/flights/'+this.props.location.bookingData.depID)
    this.setState({depFlight: res2.data})
    //this.setState({seatsBookedDep: res2.data[0].SeatsBooked})
    const res3 = await axios.get('http://localhost:8082/api/flights/'+this.props.location.bookingData.returnID)
    this.setState({returnFlight: res3.data})
    this.setState({loading: false})
    //this.setState({seatsBookedReturn: res2.data[0].SeatsBooked})
  };



  render() {
    const renderDepSeats = () => {
        let seats = [];
        for (let i = 0; i < this.state.depFlight.SeatsAvailable; i++) {
          seats.push(
                <div style={{width: 50, height: 50, cursor: 'pointer', backgroundColor: this.state.seatsBookedDep.includes(i) ? '#f00' : '#0f0'}}/>
          )
        }
        return seats;
    }
    

    const renderReturnSeats = () => {
        let seats = [];
        
        for (let i = 0; i < this.state.returnFlight.SeatsAvailable; i++) {
          seats.push(
                <div style={{width: 50, height: 50, cursor: 'pointer', backgroundColor: this.state.seatsBookedReturn.includes(i) ? '#f00' : '#0f0'}}/>
          )
        }
        return seats;
    }
    const handleSubmit = () => {

    }
    if(this.state.loading){
      return null
    }
    else{
      return (
        <div className="ShowFlightList">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <br />
                <h2 className="display-4 text-center">user Portal </h2>
              </div>
              <h2 className="display-4 text-center">Seats Selection</h2>
              <div className="col-md-11">
               
    
                <br />
               
                
               
                <br />
                <hr />
              </div>
  
            </div>
  
            <div className="list">
                  {renderDepSeats()}
                  {renderReturnSeats()}
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
}

export default seats;