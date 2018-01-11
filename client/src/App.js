import React, { Component } from 'react';
import './App.css';
import Login from './components/login/login';
import MainScreen from './components/mainscreen/mainscreen';
import { BrowserRouter as Router,
  Route,
  Switch,
  Link, } from 'react-router-dom'

class App extends Component {

    


  render() {
    const baseUrl = process.env.PUBLIC_URL; 
    return (
      <Router>
      <div className="App">

        <Switch>
          {/* The login screen */}
          <Route exact path={baseUrl + "/"} component={Login}/>

          {/* The Main screen after login */}
          <Route exact path={baseUrl + "/main"} component={MainScreen}/>
        </Switch>
        
      </div>
      </Router>
    );
  }
}

export default App;
