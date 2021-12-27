import React, { Component } from 'react';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import './App.css';

import CreateFlight from './components/CreateFlight';
import ShowFlightList from './components/ShowFlightList';
import ShowFlightDetails from './components/ShowFlightDetails';
import showflight from './components/showflight';
import UpdateFlightInfo from './components/UpdateFlightInfo';
import home  from './components/home';
import signup  from './components/signup';
import LoginScreen from './components/LoginScreen';
import search  from './components/search';
import search_results  from './components/search_results';
import usersearch from './components/usersearch';
import UserPortal from './components/UserPortal';
import usersearch_results from './components/usersearch_results'
import Navbar from "./components/Navbar";
import userReturnsearch from './components/userReturnsearch';
import confirm from './components/confirm';
import seats from './components/seats';
import editseats from './components/editseats';
import reserved from './components/reserved';
import cancel_reservation from './components/cancel_reservation';
import UserProfile from './components/UserProfile';
import ChangePassword from './components/ChangePassword';
import showBookings from './components/showBookings';
import EditDepart from './components/EditDepart';
import EditDepartResults from './components/EditDepartResults';
import EditReturn from './components/EditReturn';
import EditReturnResults from './components/EditReturnResults';

class App extends Component {
  render() {
    return (

      <Router>
         
       <div>
        <Route exact path='/' component={home} ></Route>
        <Route exact path='/UserPortal' component={UserPortal} ></Route>
        <Route exact path='/AdminPortal' component={ShowFlightList} ></Route>
        <Route path='/UserPortal/usersearch_results' component= {usersearch_results}></Route>
        <Route path='/AdminPortal/create-flight' component={CreateFlight}></Route>
        <Route path='/AdminPortal/edit-flight/:id' component={UpdateFlightInfo}></Route>
        <Route path='/signup' component={signup}></Route>
        <Route path='/login' component={LoginScreen}></Route>
        <Route path='/AdminPortal/delete-flight/:id' component={ShowFlightDetails}></Route>
        <Route path='/UserPortal/showflight/:id' component={showflight}></Route>
        <Route path='/AdminPortal/search' component={search}></Route>
        <Route path='/AdminPortal/search_results' component= {search_results}></Route>
        <Route path='/UserPortal/UserSearch' component= {usersearch}></Route>
        <Route path='/UserPortal/userReturnsearch' component= {userReturnsearch}></Route>
        <Route path='/UserPortal/confirm' component= {confirm}></Route>
        <Route path='/seats' component= {seats}></Route>
        <Route path='/editseats/:id' component= {editseats}></Route>
        <Route path='/editdepart/:id' component= {EditDepart}></Route>
        <Route path='/editreturn/:id' component= {EditReturn}></Route>
        <Route path='/editdepartresults/:id' component= {EditDepartResults}></Route>
        <Route path='/editreturnresults/:id' component= {EditReturnResults}></Route>
        <Route path='/UserPortal/reserved' component= {reserved}></Route>
        <Route path='/UserPortal/cancel_reservation/:id' component= {cancel_reservation}></Route>
        <Route path='/UserPortal/UserProfile' component= {UserProfile}></Route>
        <Route path='/UserPortal/ChangePassword' component= {ChangePassword}></Route>
        <Route path='/UserPortal/showBookings' component= {showBookings}></Route>
       </div>
       
      </Router>
      
    );
  }
}

export default App;
