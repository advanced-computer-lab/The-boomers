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
      arrival_date:'',
      departure_airport:'',
      arrival_airport:'',
      economy_count:'',
      buisiness_count:''

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
      economy_count: this.state.economy_count,
      buisiness_count: this.state.buisiness_count
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
          buisiness_count:''

        })
        this.props.history.push('/');
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
              <Link to="/" className="btn btn-outline-warning float-left">
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
                    type='text'
                    placeholder='Time - Date of departure'
                    name='departure_date'
                    className='form-control'
                    value={this.state.departure_date}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Time - Date of arrival'
                    name='arrival_date'
                    className='form-control'
                    value={this.state.arrival_date}
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
                    placeholder='Number of Economy seats'
                    name='economy_count'
                    className='form-control'
                    value={this.state.economy_count}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Number of Bbuisiness seats'
                    name='buisiness_count'
                    className='form-control'
                    value={this.state.buisiness_count}
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