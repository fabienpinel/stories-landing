import React, { Component } from 'react';
import Header from '../Header/Header';
import Brands from '../Brands/Brands';
import Shop from '../Shop/Shop';
import Footer from '../Footer/Footer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="wood-container">
        </div>
        {/* <Shop />
        <Brands />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
