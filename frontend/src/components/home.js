import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const home = (props) => {
   

    return(
        <p>    <Link to="/AdminPortal" className="btn btn-outline-warning float-left">Portal</Link> </p>
      
    )
};

export default home;