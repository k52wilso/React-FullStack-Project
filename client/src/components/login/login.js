import React, { Component } from 'react';


class Login extends Component {

    constructor(){
        super();
        this.state = {
          customers:[]
        }
      }
  
      

  render() {
    return (
      <div class="main">
        <form id="login-form" class="form">
            <input type="email" name="email"/>
            <input type="password" name="password"/>
        </form>
      </div>
    );
  }
}

export default Login;
