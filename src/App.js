import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Tracker from './components/pages/Tracker/Tracker';
import Inventory from './components/pages/Inventory/Inventory';
import News from './News/News';
import Login from './components/pages/Users/Login';
import SignUp from './components/pages/Users/SignUp';
import { Account } from './components/pages/Users/Account';
import Status from './components/pages/Users/Status';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer/footer'


class App extends Component {
  render() {
    return(
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route path='/' exact component={Home} />
              <Account>
              <Status />
                <Route path='/tracker' exact component={Tracker} />
                <Route path='/Inventory' exact component={Inventory} />
                <Route path='/news' exact component={News} />              
                <Route path='/login' exact component={Login} />
                <Route path='/sign-up' exact component={SignUp} />
              </Account>            
              </Switch>
            <Footer />
          </div>
        </Router>
      </div>
      );
  }
}

export default App;
