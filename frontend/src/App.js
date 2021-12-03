import React, { Component } from 'react';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import './App.css';

import CreateFlight from './components/CreateFlight';
import ShowFlightList from './components/ShowFlightList';
import ShowFlightDetails from './components/ShowFlightDetails';
import showflight from './components/showflight';
import UpdateFlightInfo from './components/UpdateFlightInfo';
import home  from './components/home';
import search  from './components/search';
import search_results  from './components/search_results';
import usersearch from './components/usersearch';
import UserPortal from './components/UserPortal';
import usersearch_results from './components/usersearch_results'
import Navbar from "./components/Navbar";
import userReturnsearch from './components/userReturnsearch';
import confirm from './components/confirm';

class App extends Component {
  render() {
    return (

      <Router>
         <Navbar />
       <div>
        <Route exact path='/' component={home} ></Route>
        <Route exact path='/UserPortal' component={UserPortal} ></Route>
        <Route exact path='/AdminPortal' component={ShowFlightList} ></Route>
        <Route path='/UserPortal/usersearch_results' component= {usersearch_results}></Route>
        <Route path='/AdminPortal/create-flight' component={CreateFlight}></Route>
        <Route path='/AdminPortal/edit-flight/:id' component={UpdateFlightInfo}></Route>
        <Route path='/AdminPortal/delete-flight/:id' component={ShowFlightDetails}></Route>
        <Route path='/UserPortal/showflight/:id' component={showflight}></Route>
        <Route path='/AdminPortal/search' component={search}></Route>
        <Route path='/AdminPortal/search_results' component= {search_results}></Route>
        <Route path='/UserPortal/UserSearch' component= {usersearch}></Route>
        <Route path='/UserPortal/userReturnsearch' component= {userReturnsearch}></Route>
        <Route path='/UserPortal/confirm' component= {confirm}></Route>
       </div>
       
      </Router>
      
    );
  }
}

export default App;
