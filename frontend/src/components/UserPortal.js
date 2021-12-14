import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const UserPortal = (props) => {
   

    return(
        <div className="background">
        <><div>     <Link to="/UserPortal/usersearch" className="btn btn-outline-warning float-left">Search</Link>
        </div><div>     <Link to="/UserPortal/reserved" className="btn btn-outline-warning float-left">Reserved Flgihts</Link>
            </div></>
            </div>

       
      
    )
};

export default UserPortal;