import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateFlightInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flight_number: '',
      departure_date:'',
      arrival_date:'',
      departure_airport:'',
      arrival_airport:'',
      economy_count:'',
      buisiness_count:''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/Flights/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, Flight: res.data})
        this.setState({
          flight_number: res.state.flight_number,
          departure_date: res.state.departure_date,
          arrival_date: res.state.arrival_date,
          departure_airport: res.state.departure_airport,
          arrival_airport: res.state.arrival_airport,
          economy_count: res.state.economy_count,
          buisiness_count: res.state.buisiness_count
        })
      })
      .catch(err => {
        console.log("Error from UpdateFlightInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      flight_number: this.state.flight_number,
      departure_date: this.state.departure_date,
      arrival_date: this.state.arrival_date,
      departure_airport: this.state.departure_airport,
      arrival_airport: this.state.arrival_airport,
      economy_count: this.state.economy_count,
      buisiness_count: this.state.buisiness_count
    };

    axios
      .put('http://localhost:8082/api/Flights/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/AdminPortal');
      })
      .catch(err => {
        console.log("Error in UpdateFlightInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateFlightInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/AdminPortal" className="btn btn-outline-warning float-left">
                  Show Flight List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Flight</h1>
              <p className="lead text-center">
                  Update Flight's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="flight_number">flight_number</label>
              <input
                type='text'
                placeholder='flight_number'
                name='flight_number'
                className='form-control'
                value={this.state.flight_number}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="departure_date">departure_date</label>
              <input
                type='text'
                placeholder='departure_date'
                name='departure_date'
                className='form-control'
                value={this.departure_date}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="arrival_date">arrival_date</label>
              <input
                type='text'
                placeholder='arrival_date}'
                name='arrival_date'
                className='form-control'
               value={this.state.arrival_date}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="departure_airport">departure_airport</label>
              <input
                type='text'
                placeholder='departure_airport'
                name='departure_airport'
                className='form-control'
              value={this.state.departure_airport}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="arrival_airport}">arrival_airport</label>
              <input
                type='text'
                placeholder='arrival_airport'
                name='arrival_airport'
                className='form-control'
               value={this.state.arrival_airport}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="economy_count">economy_count</label>
              <input
                type='text'
                placeholder='economy_count'
                name='economy_count'
                className='form-control'
               value={this.state.economy_count}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="buisiness_count">buisiness_count</label>
              <input
                type='text'
                placeholder='buisiness_count'
                name='buisiness_count'
                className='form-control'
               value={this.state.buisiness_count}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update flight</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateFlightInfo;