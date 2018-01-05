import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/login';
import { BrowserRouter as Router,
  Route,
  Switch,
  Link, } from 'react-router-dom'

class App extends Component {

    


  render() {
    return (
      <Router>
      <div className="App">

        <Switch>
          <Route exact path="/" component={Login}/>
        </Switch>
        
      </div>
      </Router>
    );
  }
}

export default App;
