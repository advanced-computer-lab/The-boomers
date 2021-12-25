import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReservedCard from './ReservedCard';

import { Helmet } from 'react-helmet'

import HEADER from '../components/h-e-a-d-e-r'
import styles from './your-bookings.module.css'

class reserved extends Component {
  constructor(props) {
    super(props);
    this.state = {
        bookings : [], 
        departFlights : [],
        returnFlights : [],
        user: ''
    }; 
  }
  async componentDidMount(){
    console.log(localStorage.getItem('userID'))
    const res = await axios.post('http://localhost:8082/user', {id: localStorage.getItem('userID')});
    this.setState({user: res.data[0]});
    const arr = [];
    const arr2 = [];
    const arr3 = [];
    for (let i = res.data[0].Bookings.length-1; i >=0 ; i--) {
      let res2 = await axios.get('http://localhost:8082/api/booking/' + res.data[0].Bookings[i])
      if (!res2) {
        console.log('in if statement')
        continue;
      }
      arr.push(res2.data);
        let res3 = await axios.get('http://localhost:8082/api/flights/' + res2.data.departureFlightID )
        arr2.push(res3.data);
        let res4 = await axios.get('http://localhost:8082/api/flights/' +  res2.data.returnFlightID )
        arr3.push(res4.data);
    }
    console.log('Bookings: ', arr)
    console.log('Dep: ', arr2)
    console.log('Ret: ', arr3)
    this.setState({bookings: arr})
    this.setState({departFlights: arr2})
    this.setState({returnFlights: arr3})
  };

  render() {
    const reserved_flights = this.state.bookings;
    const reserved_departure = this.state.departFlights;
    const reserved_return = this.state.returnFlights;

    let reserved_flightList;
    if(!reserved_flights || !reserved_departure || !reserved_return) {
        reserved_flightList = "there is no flight record!";
    } else {
        console.log(this.state.departFlights)
        console.log(this.state.returnFlights)
        reserved_flightList = reserved_flights.map((reserved_flight, k) =>
        <ReservedCard reserved_flight={reserved_flight} depFlight={this.state.departFlights[k]} retFlight={this.state.returnFlights[k]}/> 
      );
    }
    

    return (
<div className={styles['container']}>
      <Helmet>
        <title>Your Bookings - Travel Agency</title>
        <meta property="og:title" content="Your Bookings - Travel Agency" />
      </Helmet>
      <HEADER rootClassName="rootClassName"></HEADER>
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
        <h1 className={styles['text']}>Your Bookings</h1>
        {reserved_flightList}
      </div>
      <div className={styles['Footer']}>
        <div className={styles['Menu']}>
          <img
            alt="image"
            src="/playground_assets/fire_fly_logo-300h.png"
            className={styles['image']}
          />
          <div className={styles['Links-container']}>
            <div className={styles['container1']}>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link']}
              >
                Tour packages
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link01']}
              >
                Personalized offers
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link02']}
              >
                Special deals
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['Link03']}
              >
                Summer holiday
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </a>
            </div>
            <div className={styles['container2']}>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link04']}
              >
                About us
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link05']}
              >
                FAQ
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link06']}
              >
                Terms and conditions
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link07']}
              >
                Contact
              </a>
            </div>
          </div>
          <div className={styles['Follow-container']}>
            <span className={styles['text1']}>
              Follow us on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className={styles['Icons-container']}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link08']}
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className={styles['icon']}
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link09']}
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className={styles['icon2']}
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link10']}
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className={styles['icon4']}
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
        
    );
  }
}

export default reserved;