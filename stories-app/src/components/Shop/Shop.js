import React, { Component } from 'react';
import {Row, Col } from 'react-flexbox-grid';
import './Shop.scss';

class Shop extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="shop-container">
            <section className="shop">
                <Row>
                    <Col sm={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
                        <img className="monkeys" src="/assets/img/Monkeys.jpg" />

                    </Col>
                </Row>
            </section>
            </div>
        );
    }
}

export default Shop;
