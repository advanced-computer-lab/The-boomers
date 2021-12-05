import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateFlight extends Component {
  constructor() {
    super();
    this.state = {
      flight_number: '',
      departure_date:'',
      departure_time:'',
      arrival_date:'',
      arrival_time:'',
      departure_airport:'',
      arrival_airport:'',
      airport_terminal:'',
      cabin:'',
      SeatsBooked: [],
      SeatsAvailable: '',
      Price: '',
      BaggageAllowance: ''
    };
  }

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
      departure_time: this.state.departure_time,
      arrival_time: this.state.arrival_time,
      airport_terminal: this.state.airport_terminal,
      cabin: this.state.cabin,
      SeatsBooked: this.state.SeatsBooked,
      SeatsAvailable: this.state.SeatsAvailable,
      Price: this.state.Price,
      BaggageAllowance: this.state.BaggageAllowance


    };

    axios
      .post('http://localhost:8082/api/flights', data)
      .then(res => {
        this.setState({
          flight_number: '',
          departure_date:'',
          arrival_date:'',
          departure_airport:'',
          arrival_airport:'',
          economy_count:'',
          buisiness_count:'',
          airport_terminal:'',
          arrival_time:'',
          departure_time:'',
          cabin:'',
          SeatsBooked: [],
          SeatsAvailable: '',
          Price: '',
          BaggageAllowance: ''

        })
        this.props.history.push('/AdminPortal');
      })
      .catch(err => {
        console.log("Error in CreateFlight!");
      })
  };

  render() {
    return (
      <div className="CreateFlight">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/AdminPortal" className="btn btn-outline-warning float-left">
                  Show Flights List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Flight</h1>
              <p className="lead text-center">
                  Create new Flight
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Flight Number'
                    name='flight_number'
                    className='form-control'
                    value={this.state.flight_number}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='Date of departure'
                    name='departure_date'
                    className='form-control'
                    value={this.state.departure_date}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='time'
                    placeholder='Time of departure'
                    name='departure_time'
                    className='form-control'
                    value={this.state.departure_time}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='Date of arrival'
                    name='arrival_date'
                    className='form-control'
                    value={this.state.arrival_date}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='time'
                    placeholder='Time of arrival'
                    name='arrival_time'
                    className='form-control'
                    value={this.state.arrival_time}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='depart from airport...'
                    name='departure_airport'
                    className='form-control'
                    value={this.state.departure_airport}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='arrive at airport...'
                    name='arrival_airport'
                    className='form-control'
                    value={this.state.arrival_airport}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Airport Terminal'
                    name='airport_terminal'
                    className='form-control'
                    value={this.state.airport_terminal}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Cabin'
                    name='cabin'
                    className='form-control'
                    value={this.state.cabin}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='number'
                    placeholder='Seats Available'
                    name='SeatsAvailable'
                    className='form-control'
                    value={this.state.SeatsAvailable}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='number'
                    placeholder='Price'
                    name='Price'
                    className='form-control'
                    value={this.state.Price}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='number'
                    placeholder='BaggageAllowance'
                    name='BaggageAllowance'
                    className='form-control'
                    value={this.state.BaggageAllowance}
                    onChange={this.onChange}
                  />
                </div>
                


                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateFlight;