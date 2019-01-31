import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './components/Home';
import Tips from './components/Tips';
class App extends Component {
  render() {
    return (
      <Header>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/tips" component={Tips} />
          </Switch>
        </BrowserRouter>
      </Header>
    );
  }
}

export default App;
