import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateFlight extends Component {
  constructor() {
    super();
    this.state = {
      From:'',
      To:'',
      Cabin:'',
      Flight_Date:'',
      Seats_Available_on_Flight:'',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      From: this.From,
      To: this.To,
      Cabin: this.Cabin,
      Flight_Date: this.Flight_Date,
      Seats_Available_on_Flight: this.Seats_Available_on_Flight
    };

    axios
      .post('http://localhost:8082/api/flights', data)
      .then(res => {
        this.setState({
          From: '',
          To:'',
          Cabin:'',
          Flight_Date:'',
          Seats_Available_on_Flight:''
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
              <br />

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='From'
                    name='From'
                    className='form-control'
                    value={this.From}
                    onChange={this.onChange}
                  />
                </div>
                

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder=' To '
                    name='To'
                    className='form-control'
                    value={this.To}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Cabin'
                    name='Cabin'
                    className='form-control'
                    value={this.Cabin}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Flight_Date'
                    name='Flight_Date'
                    className='form-control'
                    value={this.Flight_Date}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Seats_Available_on_Flight'
                    name='Seats_Available_on_Flight'
                    className='form-control'
                    value={this.Seats_Available_on_Flight}
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