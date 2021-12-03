import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showflight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flight: {}
    };
  }

  componentDidMount() {
    console.log(this.props.location.flightData);
    console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/flights/'+this.props.match.params.id)
      .then(res => {
        console.log("Print-showflight-API-response: " + res.data);
        this.setState({
          flight: res.data
        })
      })
      .catch(err => {
        console.log("Error from Showflight");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/flights/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form Showflight_deleteClick");
      })
  };


  render() {

    const flight = this.state.flight;
    let flightItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Depature Date</td>
            <td>{ flight.departure_date}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Departure Airport</td>
            <td>{ flight.departure_airport }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Arrival Date</td>
            <td>{ flight.arrival_date }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Arrival airport</td>
            <td>{ flight.arrival_airport}</td>
          </tr>
          
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowFlightDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show flight List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">flight's Record</h1>
              <p className="lead text-center">
                  View flight's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { flightItem }
          </div>

          <div className="row">
           

          <div onClick={()=>this.props.history.push({
          pathname: this.props.location.return ? "/UserPortal/confirm" : "/UserPortal/userReturnsearch",
          flightData: this.props.location.flightData,
          flightID: flight._id,
          depID : this.props.location.depID,
          })} style={{width: 200, height: 200, cursor: 'pointer', backgroundColor:'#000'}}>
            <p> Select </p>
            <br />
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

export default showflight;