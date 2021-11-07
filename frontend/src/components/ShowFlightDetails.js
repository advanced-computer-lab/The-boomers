import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showflightDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flight: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/flights/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showflightDetails-API-response: " + res.data);
        this.setState({
          flight: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowflightDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/flights/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowflightDetails_deleteClick");
      })
  };


  render() {

    const flight = this.state.flight;
    let flightItem = <div>
     Are you sure you want to delete this flight?
    </div>

    return (
      <div className="ShowflightDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/AdminPortal" className="btn btn-outline-warning float-left">
                  Show flight List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              
              <hr /> <br />
            </div>
          </div>
          <div>
            { flightItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,flight._id)}>Delete flight</button><br />
            </div>

            
          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit flight</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete flight</button> */}

        </div>
      </div>
    );
  }
}

export default showflightDetails;