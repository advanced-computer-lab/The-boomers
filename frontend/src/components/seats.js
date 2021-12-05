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
    console.log(this.props.location.bookingData.passCount)
  };


  render() {
    const renderDepSeats = () => {
        let seats = [];
        for (let i = 0; i < this.state.depFlight.SeatsAvailable; i++) {
          seats.push(
                <div onClick={() => handleSelectDepart(i)} style={{marginLeft: i !== 0 ? 20 : 0, width: 50, height: 50, cursor: 'pointer', backgroundColor: this.state.seatsBookedDep.includes(i) || this.state.currentSelectionDepart.includes(i) ? '#f00' : '#0f0'}}/>
          )
        }
        return seats;
    }
    

    const renderReturnSeats = () => {
        let seats = [];
        
        for (let i = 0; i < this.state.returnFlight.SeatsAvailable; i++) {
          seats.push(
                <div onClick={() => handleSelectReturn(i)} style={{marginLeft: i !== 0 ? 20 : 0, width: 50, height: 50, cursor: 'pointer', backgroundColor: this.state.seatsBookedReturn.includes(i) || this.state.currentSelectReturn.includes(i) ? '#f00' : '#0f0'}}/>
          )
        }
        return seats;
    }
    const handleSubmit = () => {
        const arr = this.state.seatsBookedDep
        arr.push(...this.state.currentSelectionDepart)
        const arr2 = this.state.seatsBookedReturn
        arr2.push(...this.state.currentSelectReturn)

        axios
        .put('http://localhost:8082/api/Flights/'+this.state.depFlight._id, {SeatsBooked : arr})
        .then(res => {
        })
        .catch(err => {
          console.log("Error in UpdateFlightInfo!");
        })

        axios
        .put('http://localhost:8082/api/Flights/'+this.state.returnFlight._id, {SeatsBooked : arr2})
        .then(res => {
          this.props.history.push('/');
        })
        .catch(err => {
          console.log("Error in UpdateFlightInfo!");
        })
    }
    const handleSelectDepart = (i) => {
        if(this.state.currentSelectionDepart.includes(i)){
            const arr = this.state.currentSelectionDepart.slice()
            arr.splice(this.state.currentSelectionDepart.indexOf(i), 1)
            this.setState({currentSelectionDepart: arr})
        }
        else if(this.state.currentSelectionDepart.length < this.props.location.bookingData.passCount){
            const arr = this.state.currentSelectionDepart.slice();
            arr.push(i);
            this.setState({currentSelectionDepart: arr})  
        }
    }
    const handleSelectReturn = (i) => {
        if(this.state.currentSelectReturn.includes(i)){
            const arr = this.state.currentSelectReturn.slice()
            arr.splice(this.state.currentSelectReturn.indexOf(i), 1)
            this.setState({currentSelectReturn: arr})
        }
        else if(this.state.currentSelectReturn.length < this.props.location.bookingData.passCount){
            const arr = this.state.currentSelectReturn.slice();
            arr.push(i);
            this.setState({currentSelectReturn: arr})  
        }
    }
    if(this.state.loading){
      return null
    }
    else{
      return (
        <div style={{display: 'flex', flexDirection: 'column'}}>

            <div style={{width: '100%', height: 200, backgroundColor: '#000', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <label style={{fontSize: 30, color: '#fff'}}>Depart Flight</label>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', height: 500}}>
              {renderDepSeats()}
            </div>

            <div style={{width: '100%', height: 200, backgroundColor: '#000', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <label style={{fontSize: 30, color: '#fff'}}>Return Flight</label>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', height: 500}}>
                {renderReturnSeats()}
            </div>   

            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', height: 300}}>
              <div onClick ={()=>handleSubmit()}style={{width: 120, height: 60, cursor: 'pointer', backgroundColor: '#C71585', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row'}} >
                <label style={{color: '#fff'}}>Reserve</label>
              </div>
            </div>

        </div>
      );
    }
  }
}

export default seats;