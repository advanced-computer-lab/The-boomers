import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';



class usersearch extends Component {
  constructor() {
    super();
    this.state = {
      childrenCount:0,
      adultsCount:0,
      departure_date:'',
      arrival_date:'',
      departure_airport: '',
      arrival_airport: '',
      cabin:'',

      
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {

    e.preventDefault();

    const data = {
      departure_date: this.state.departure_date,
      departure_airport: this.state.departure_airport,
      arrival_date: this.state.arrival_date,
      arrival_airport: this.state.arrival_airport,
      cabin: this.state.cabin
    };

        this.props.history.push({
            pathname: '/UserPortal/usersearch_results',
            flightData: data,
            passengerCount: parseInt((this.state.adultsCount === '' ? 0 : this.state.adultsCount), 10)+parseInt((this.state.childrenCount === '' ? 0 : this.state.childrenCount),10)
          })
  };

  render() {
    return (
      <div className="CreateFlight">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
           
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Find Flight</h1>
              <p className="lead text-center">
                 Search
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                
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
                    type='number'
                    placeholder='Number of children'
                    name='childrenCount'
                    className='form-control'
                    value={this.state.childrenCount}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='number'
                    placeholder='Number of Adults'
                    name='adultsCount'
                    className='form-control'
                    value={this.state.adultsCount}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Cabin Class'
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

export default usersearch;