import React, {Component} from 'react';
import './App.css';
import {Navbar} from './components/navbar/Navbar';
import {Home} from './views/Home';
import {Status} from './views/Status';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/status" component={Status}/>
          <Redirect from="/" to="/home"/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
