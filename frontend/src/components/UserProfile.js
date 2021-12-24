import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
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

  render() {

    const user = this.state.user;
    let userItem = <div>
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
            <td>First name</td>
            <td>{ user.First_Name}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Last name</td>
            <td>{ user.Last_Name }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Email</td>
            <td>{ user.Email }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Home Address</td>
            <td>{ user.Home_Address}</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Passport Number </td>
            <td>{ user.Passport_Number}</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Username</td>
            <td>{ user.Username}</td>
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
              
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">User Profile</h1>
              <hr /> <br />
            </div>
          </div>
          <div className="row">
          { userItem }

          </div>
            { 
       }
 <div>     <Link to="/UserPortal/ChangePassword" className="btn btn-outline-warning float-left">Change Password</Link>  
            </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;