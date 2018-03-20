import React, { Component } from 'react';
import Header from '../Header/Header';
import Brands from '../Brands/Brands';
import Shop from '../Shop/Shop';
import Vespa from '../Vespa/Vespa';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Shop />
        <Vespa />
        <Brands />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
