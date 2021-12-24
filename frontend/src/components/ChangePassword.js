import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: '',
        newPassword: '',
        oldPassword: ''
    };
  }

  componentDidMount() {
    console.log(this.props.location.userData);
    console.log("Print id: " + localStorage.getItem("userID"));
    axios
      .post('http://localhost:8082/user/',{id:localStorage.getItem("userID")})
      .then(res => {
        console.log("Print-showflight-API-response: " + res.data);
        this.setState({
          user: res.data[0]
        })
      })
      .catch(err => {
        console.log("Error from UserProfile");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
        oldPassword: this.state.oldPassword,
        newPassword: this.state.newPassword
    };

    axios
    .post('http://localhost:8082/ChangePassword/',{id:localStorage.getItem("userID") ,oldPassword: this.state.oldPassword, newPassword: this.state.newPassword})
    .then(res => {
        if(res.data.message === 'Success'){
            console.log('Success')
          }
          else{
           console.log('Error')
          }
    })
    .catch(err => {
      console.log("Error from UserProfile");
    })
  };
  


  render() {
    return (
      <div className="ChangePassword">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
             
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Update Password</h1>
              <p className="lead text-center">
        
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="flight_number">Current Password</label>
              <input
                type='password'
                placeholder='current password'
                name='oldPassword'
                className='form-control'
               value={this.state.oldPassword}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="departure_date">New Password</label>
              <input
                type='password'
                placeholder='New Password'
                name='newPassword'
                className='form-control'
               value={this.state.newPassword}
                onChange={this.onChange}
              />
            </div>


            
          

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Password</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default ChangePassword;