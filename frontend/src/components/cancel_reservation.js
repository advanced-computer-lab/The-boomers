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
      bookings:[]
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
  

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/booking/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowbookingDetails_deleteClick");
      })
      
      
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