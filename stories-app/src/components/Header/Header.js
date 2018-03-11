import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <section className="header">
                <div>
                    <img
                        className="logo pop-effect"
                        src="../../../assets/img/LogoHD_Color_without_title.png" />
                </div>
                <div>
                    <img
                        className="logo title"
                        src="../../../assets/img/Title.png" />
                </div>
            </section>
        );
    }
}

export default Header;
