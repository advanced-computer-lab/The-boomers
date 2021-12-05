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
      currentSelectionDepart: [],
      currentSelectReturn: [],
    };
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:8082/api/booking/'+this.props.location.bookingData.bookingID)
    this.setState({booking: res})
    const res2 = await axios.get('http://localhost:8082/api/flights/'+this.props.location.bookingData.depID)
    this.setState({depFlight: res2.data})
    this.setState({seatsBookedDep: res2.data.SeatsBooked === null ? [] : res2.data.SeatsBooked})
    const res3 = await axios.get('http://localhost:8082/api/flights/'+this.props.location.bookingData.returnID)
    this.setState({returnFlight: res3.data})
    this.setState({loading: false})
    this.setState({seatsBookedDep: res3.data.SeatsBooked === null ? [] : res3.data.SeatsBooked})
  };



  render() {
    const renderDepSeats = () => {
        let seats = [];
        for (let i = 0; i < this.state.depFlight.SeatsAvailable; i++) {
          seats.push(
                <div style={{marginLeft: i !== 0 ? 20 : 0, width: 50, height: 50, cursor: 'pointer', backgroundColor: this.state.seatsBookedDep.includes(i) ? '#f00' : '#0f0'}}/>
          )
        }
        return seats;
    }
    

    const renderReturnSeats = () => {
        let seats = [];
        
        for (let i = 0; i < this.state.returnFlight.SeatsAvailable; i++) {
          seats.push(
                <div style={{marginLeft: i !== 0 ? 20 : 0, width: 50, height: 50, cursor: 'pointer', backgroundColor: this.state.seatsBookedReturn.includes(i) ? '#f00' : '#0f0'}}/>
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
        <div style={{display: 'flex', flexDirection: 'column'}}>

            <div style={{width: window.innerWidth, height: 200, backgroundColor: '#000', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <label style={{fontSize: 30, color: '#fff'}}>Depart Flight</label>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: window.innerWidth, height: 500}}>
              {renderDepSeats()}
            </div>

            <div style={{width: window.innerWidth, height: 200, backgroundColor: '#000', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <label style={{fontSize: 30, color: '#fff'}}>Return Flight</label>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: window.innerWidth, height: 500}}>
                {renderReturnSeats()}
            </div>   

            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: window.innerWidth, height: 300}}>
                <div style={{width: 120, height: 60, cursor: 'pointer', backgroundColor: '#f00'}} />
            </div>

        </div>
      );
    }
  }
}

export default seats;