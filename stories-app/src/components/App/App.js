import React, { Component } from 'react';
import Header from '../Header/Header';
import Brands from '../Brands/Brands';
import Shop from '../Shop/Shop';
import Vespa from '../Vespa/Vespa';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Modal from 'react-responsive-modal';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    //check if localstorage contains the alreadyOpenned value
    let alreadyOpenned = window.localStorage.getItem('modalAlreadyOpennedOnce');
    this.state = {
      open: true,
    };
  }

  onOpenModal() {
    this.setState({ open: true });
  };

  onCloseModal(){
    this.setState({ open: false });
    window.localStorage.setItem('modalAlreadyOpennedOnce', true);
  };


  render() {
    const { open } = this.state;
    return (
      <div className="App">
        <Modal open={open} onClose={() => this.onCloseModal()} little>
          <h2 className="center">Ouverture du magasin Samedi 31 Mars !</h2>
          <img src="/assets/img/ouverture.jpg" />
        </Modal>
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
