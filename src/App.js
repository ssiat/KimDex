import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Header from './Header'
import Tips from './Tips'
class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <BrowserRouter>
                    <Route exact path='/tips' component={Tips} />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
