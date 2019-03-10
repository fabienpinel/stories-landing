import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Carousel from 'nuka-carousel';
import './ShopPictures.scss';


class ShopPictures extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="carousel-container">
          <Carousel dragging={true} slidesToShow={1}>
            <img src="assets/img/shop/shop4.jpg" />
            <img src="assets/img/shop/shop2.jpg" />
            <img src="assets/img/shop/shop3.jpg" />
            <img src="assets/img/shop/shop5.jpg" />
            <img src="assets/img/shop/shop1.jpg" />
            <img src="assets/img/shop/coutances_5.jpg" />
            <img src="assets/img/shop/coutances_1.jpg" />
            <img src="assets/img/shop/coutances_2.jpg" />
            <img src="assets/img/shop/coutances_3.jpg" />
            <img src="assets/img/shop/coutances_4.jpg" />
            <img src="assets/img/shop/coutances_6.jpg" />
          </Carousel>
          </div>

        );
      }
}

export default ShopPictures;
