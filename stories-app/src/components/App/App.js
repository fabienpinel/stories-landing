import React, { Component } from 'react';
import Header from '../Header/Header';
import Brands from '../Brands/Brands';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Brands />
      </div>
    );
  }
}

export default App;
