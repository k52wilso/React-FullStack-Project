import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Login extends Component {

    constructor(){
        super();
        
      }
  
      

  render() {
    const baseUrl = process.env.PUBLIC_URL; 
    return (
      <div className="main">

        {/* top section with image */}
        <div className="top">
          <h2>Data Processing Software</h2>
        </div>

        {/* bottom section of login */}
        <div className="bottom">
          <form className="form">
              <h2>Login Details</h2>
              <input type="email" name="email" placeholder="Email"/>
              <input type="password" name="password" placeholder="Password"/>

              <Link to={baseUrl + "/main"}>
                <button type="button">Login</button>
              </Link>
          </form>
        </div>

        
      </div>
    );
  }
}

export default Login;
