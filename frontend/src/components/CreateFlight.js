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
      economy_count:'',
      buisiness_count:'',
      EcoavailableChildren:'',
      EcoavailableAdults:'',
      BuiavailableChildren:'',
      BuiavailableAdults:'',
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
      buisiness_count: this.state.buisiness_count,
      departure_time: this.state.departure_time,
      arrival_time: this.state.arrival_time,
      airport_terminal: this.state.airport_terminal,
      BuiavailableAdults: this.state.BuiavailableAdults,
      EcoavailableChildren: this.state.EcoavailableChildren,
      BuiavailableChildren: this.state.BuiavailableChildren,
      EcoavailableAdults: this.state.EcoavailableAdults,
     
      
     



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
          BuiavailableAdults:'',
          EcoavailableChildren:'',
          BuiavailableChildren:'',
          EcoavailableAdults:''


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
                    placeholder='Number of Buisiness seats'
                    name='buisiness_count'
                    className='form-control'
                    value={this.state.buisiness_count}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Economy available Children Seats'
                    name='EcoavailableChildren'
                    className='form-control'
                    value={this.state.EcoavailableChildren}
                    onChange={this.onChange}
                  />
                </div>
                
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Buisness available Adults seats'
                    name='BuiavailableAdults'
                    className='form-control'
                    value={this.state.BuiavailableAdults}
                    onChange={this.onChange}
                  />
                </div>


                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Economy available Adults seats'
                    name='EcoavailableAdults'
                    className='form-control'
                    value={this.state.EcoavailableAdults}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Business available Children seats'
                    name='BuiavailableChildren'
                    className='form-control'
                    value={this.state.BuiavailableChildren}
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