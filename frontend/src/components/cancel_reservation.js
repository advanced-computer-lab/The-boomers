import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class cancel_reservation
 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booking: {},
      bookings:[],
      user: {}
    };
  }

  componentDidMount() {
    axios
    .post('http://localhost:8082/user', {
      id: localStorage.getItem('userID')
    })
    .then(res => {
      this.setState({bookings: res.data[0].Bookings})
      this.setState({user: res.data[0]})
    })
    .catch(err =>{
      console.log('Error from confirm');
    })
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/booking/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showbookingDetails-API-response: " + res.data);
        this.setState({
          booking: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowbookingDetails");
      })
  };
  

  async onDeleteClick (id) {
        const res = await axios.get('http://localhost:8082/api/flights/'+this.state.booking.departureFlightID)
        const res2 = await axios.get('http://localhost:8082/api/flights/'+this.state.booking.returnFlightID)
        const arr2 = res.data.SeatsBooked
        const arr3 = res2.data.SeatsBooked
        for(let i = 0; i < this.state.booking.departureFlightSeats.length; i++){
          arr2.splice(arr2.indexOf(this.state.booking.departureFlightSeats[i]),1)
        }
        for(let i = 0; i < this.state.booking.returnFlightSeats.length; i++){
          arr3.splice(arr3.indexOf(this.state.booking.returnFlightSeats[i]),1)
        }
        axios
        .put('http://localhost:8082/api/Flights/'+this.state.booking.departureFlightID, {SeatsBooked : arr2})
        .then(res => {
        })
        .catch(err => {
          console.log("Error in UpdateFlightInfo!");
        })

        axios
        .put('http://localhost:8082/api/Flights/'+this.state.booking.returnFlightID, {SeatsBooked : arr3})
        .then(res => {
        })
        .catch(err => {
          console.log("Error in UpdateFlightInfo!");
        })
        axios
        .delete('http://localhost:8082/api/booking/'+id)
        .then(res => {
          this.props.history.push("/userportal/showbookings");
        })
        .catch(err => {
          console.log("Error form ShowbookingDetails_deleteClick");
        })

        var TotalPrice = (res.data.Price * this.state.booking.PassCount) + (res2.data.Price * this.state.booking.PassCount);
        var emailText = `Your flight reservation from (${res.data.departure_airport}) to (${res.data.arrival_airport}) has been cancelled upon your request.($${TotalPrice}) will be refunded to your bank account`;
        let mailOptions = {
          from: 'fflyairlines@gmail.com',
          to: this.state.user.Email,
          subject: 'Booking Cancelation',
          text: emailText,
          html: `<p> ${emailText}</p>`,
        };
        axios.post('http://localhost:8082/sendMail', mailOptions)
          .then(res => {
            console.log(res.data);
          })
          .catch(err => console.log(err));


        const arr = this.state.bookings.slice()
        arr.splice(arr.indexOf(id), 1)
          const data = {
            Bookings: arr
          }
        axios.put('http://localhost:8082/updateUser/' + localStorage.getItem('userID'), data)
  };



  render() {
    const booking = this.state.booking;
    let bookingItem = <div>
     Are you sure you want to delete this booking?
    </div>

    return (
      <div className="ShowbookingDetails">
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <br /> <br />
            <Link to="/AdminPortal" className="btn btn-outline-warning float-left">
                Show booking List
            </Link>
          </div>
          <br />
          <div className="col-md-8 m-auto">
            
            <hr /> <br />
          </div>
        </div>
        <div>
          { bookingItem }
        </div>

        <div className="row">
          <div className="col-md-6">
            <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,booking._id)}>Delete booking</button><br />
          </div>

          
        </div>
          {/* <br />
          <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit booking</button>
          <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete booking</button> */}

      </div>
    </div>
  );
  }
}

export default cancel_reservation;