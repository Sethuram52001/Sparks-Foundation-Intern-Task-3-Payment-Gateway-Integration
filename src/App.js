import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import DonationPage from './components/DonationPage';
import LandingPage from './components/LandingPage';

class App extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/donate" component={DonationPage} exact />
          </Switch>
        </Router>
      </div>
     );
  }
}
 
export default App;