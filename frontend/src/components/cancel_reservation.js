import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class cancel_reservation
 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booking: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/booking/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showflightDetails-API-response: " + res.data);
        this.setState({
          booking: res.data
        })
      })
      .catch(err => {
        console.log("Error from cancel reservation");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/booking/'+id)
      .then(res => {
        this.props.history.push('/UserPortal/reserved');
      })
      .catch(err => {
        console.log("Error form cancel reservation");
      })
  };


  render() {

    const booking = this.state.booking;
    let bookingItem = <div>
     Are you sure you want to cancel this reservation?
    </div>

    return (
      <div className="ShowflightDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to='/UserPortal/reserved' className="btn btn-outline-warning float-left">
                  Show reserved flights
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
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,booking._id)}>Delete flight</button><br />
            </div>

            
          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit flight</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete flight</button> */}

        </div>
      </div>
    );
  }
}

export default cancel_reservation;