import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class EditReturn extends Component {
  constructor() {
    super();
    this.state = {
      cabin: '',
      departure_date: '',
      booking: {},
      returnFlight: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async componentDidMount() {
    const res = await axios.get('http://localhost:8082/api/booking/'+this.props.match.params.id)
    this.setState({booking: res.data})
    const res2 = await axios.get('http://localhost:8082/api/flights/'+res.data.returnFlightID)
    this.setState({returnFlight: res2.data})
  };

  onSubmit = e => {
    e.preventDefault();
    const data = {
        departure_airport: this.state.returnFlight.departure_airport,
        arrival_airport: this.state.returnFlight.arrival_airport,
        cabin: this.state.cabin,
        departure_date: this.state.departure_date
    };   
    this.props.history.push({
        pathname: `/editreturnresults/${this.props.match.params.id}`,
        flightData: data
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
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='cabin'
                    name='cabin'
                    className= 'form-control'
                    value={this.state.cabin}
                    onChange={this.onChange}
                  />
                </div>  
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='departure_date'
                    name='departure_date'
                    className= 'form-control'
                    value={this.state.departure_date}
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

export default EditReturn;