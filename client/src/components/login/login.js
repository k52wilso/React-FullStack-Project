import React, { Component } from 'react';
import {Route} from 'react-router-dom';

// Create button function
const Button = (callback) => (
  <Route render={({ history}) => (
    <button
      type='button' className="button"
      onClick={() => { callback(history) }}
    >
      Login
    </button>
  )} />
)

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
          <form className="form" >
              <h2>Login Details <span>(email:test and password:test)</span></h2>
              <input type="email" name="email" id="email" placeholder="Email"/>
              <input type="password" name="password" id="password" placeholder="Password"/>

              
                {Button(this.props.check)}
              
          </form>
        </div>

        
      </div>
    );
  }
}

export default Login;
