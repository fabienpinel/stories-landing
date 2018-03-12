import React, { Component } from 'react';
import Header from '../Header/Header';
import Brands from '../Brands/Brands';
import Shop from '../Shop/Shop';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Shop />
        <Brands />
      </div>
    );
  }
}

export default App;
