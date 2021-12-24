import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const UserPortal = (props) => {
   

    return(
        <div>     <Link to="/UserPortal/usersearch" className="btn btn-outline-warning float-left">Search</Link>  
                <Link to="/UserPortal/reserved" className="btn btn-outline-warning float-left">Reserved Flgihts</Link>
                <Link to="/UserPortal/UserProfile" className="btn btn-outline-warning float-left">View Profile</Link>
            </div>
       

       
      
    )
};

export default UserPortal;