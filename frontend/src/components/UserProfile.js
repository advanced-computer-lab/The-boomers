import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import { Helmet } from 'react-helmet'

import HEADER from '../components/h-e-a-d-e-r'
import Footer from '../components/footer'
import styles from './profile.module.css'


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
     
        <div className={styles['container']}>
      <Helmet>
        <title>Profile - Travel Agency</title>
        <meta property="og:title" content="Profile - Travel Agency" />
      </Helmet>
      <HEADER></HEADER>
      <div className={styles['Dashboard']}>
        <a
          href="/userportal/userprofile"
          target="_blank"
          rel="noreferrer noopener"
          className={styles['Account-Details']}
        >
          Account Details
        </a>
        <a
          href="/userportal/changepassword"
          target="_blank"
          rel="noreferrer noopener"
          className={styles['Change-Password']}
        >
          Change Password
        </a>
        <a
          href="/userportal/showbookings"
          target="_blank"
          rel="noreferrer noopener"
          className={styles['My-Bookings']}
        >
          My Bookings
        </a>
      </div>
      <div className={styles['Main-Body-Container']}>
        <h1 className={styles['text']}>Welcome, { user.First_Name}</h1>
        <label className={styles['First-name']}>First Name : { user.First_Name}</label>
        <label className={styles['Last-name']}>Last Name: {user.Last_Name}</label>
        <label className={styles['Email']}>Email: {user.Email}</label>
        <label className={styles['Username']}>Username: { user.Username}</label>
        <label className={styles['Passport-Number']}>Passport Number: { user.Passport_Number}</label>
        <label className={styles['Home-Address']}>Home Address: { user.Home_Address}</label>
      </div>
      <Footer></Footer>
    </div>
        
    </div>

    return (
 <div className="row">
          { userItem }
      </div>
    );
  }
}

export default UserProfile;