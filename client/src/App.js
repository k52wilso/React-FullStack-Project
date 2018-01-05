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
    return (
      <Router>
      <div className="App">

        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/main" component={MainScreen}/>
        </Switch>
        
      </div>
      </Router>
    );
  }
}

export default App;
