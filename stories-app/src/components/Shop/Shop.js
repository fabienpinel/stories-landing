import React, { Component } from 'react';
import './Shop.scss';

class Shop extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="shop">
               <img  className="monkeys" src="/assets/img/Monkeys.jpg" />
            </section>
        );
    }
}

export default Shop;
