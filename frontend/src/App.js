import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import './App.css';

import CreateFlight from './components/CreateFlight';
import ShowFlightList from './components/ShowFlightList';
import ShowFlightDetails from './components/ShowFlightDetails';
import UpdateFlightInfo from './components/UpdateFlightInfo';

class App extends Component {
  render() {
    return (
      
      <Router>
       <div>
       
        <Route exact path='/' component={ShowFlightList} ></Route>
        <Route path='/create-flight' component={CreateFlight}></Route>
        <Route path='/edit-flight/:id' component={UpdateFlightInfo}></Route>
          <Route path='/show-flight/:id' component={ShowFlightDetails}></Route>

        
       </div>
      </Router>
      
    );
  }
}

export default App;
