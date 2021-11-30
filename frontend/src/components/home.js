import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const home = (props) => {
   

    return(
        <div>     <Link to="/AdminPortal" className="btn btn-outline-warning float-left">Portal</Link>  
          <Link to="/UserPortal" className="btn btn-outline-warning float-left">User</Link>  </div>
       

       
      
    )
};

export default home;