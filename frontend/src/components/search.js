import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';



class search extends Component {
  constructor() {
    super();
    this.state = {
      flight_number: '',
      departure_date:'',
      arrival_date:'',
      arrival_time:'',
      departure_time:'',
      airport_terminal: ''
      
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
      arrival_time: this.arrival_time,
      airport_terminal: this.airport_terminal,
    };

    
        this.props.history.push({
            pathname: '/AdminPortal/search_results',
            flightData: data})
       
      
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
                    placeholder='arrival_time'
                     name='arrival_time'
                    className='form-control'
                    value={this.state.arrival_time}              
                    onChange={this.onChange}
                  />
                </div>

                
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='departure_time'
                    name='departure_time'
                    className='form-control'
                    value={this.state.departure_time}
                    onChange={this.onChange}
                  />
                </div>

                
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='airport_terminal'
                    name='airport_terminal'
                    className= 'form-control'
                    value={this.state.airport_terminal}
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

export default search;