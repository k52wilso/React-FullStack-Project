import React, { Component } from 'react';
import './App.css';
import Login from './components/login/login';
import MainScreen from './components/mainscreen/mainscreen';
import { BrowserRouter as Router,
  Route,
  Switch,
  Link, } from 'react-router-dom'

  const baseUrl = process.env.PUBLIC_URL;

class App extends Component {

   constructor(){
      super();

      this.checkLogin = this.checkLogin.bind(this);
   } 

  //  Check the provide login details
    checkLogin(history){
      
      let url = '/login';
      let email = document.getElementById('email');
      let password = document.getElementById('password');
      fetch(url, {
        method: 'POST', // or 'PUT'
        credentials:'include',
        body: JSON.stringify({email:email.value,password:password.value}), 
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then((response) => {
        if(response.status == 'Success'){
          //  If Succesful go to main screen
          history.push('/main');
        }else{
          email.style.border = "4px solid #e84118"; 
          password.style.border = "4px solid #e84118"; 
        }
      });
  }


  render() {
     
    return (
      <Router>
      <div className="App">

        <Switch>
          {/* The login screen */}
          <Route exact path={baseUrl + "/"} render={() => <Login check={this.checkLogin}/> }/>

          {/* The Main screen after login */}
          <Route exact path={baseUrl + "/main"} component={MainScreen}/>
        </Switch>
        
      </div>
      </Router>
    );
  }
}

export default App;
