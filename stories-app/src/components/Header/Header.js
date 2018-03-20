import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <div>
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
                        <p className="navigation">
                           <span><a href="#concept">Concept</a></span> - <span><a href="#brands">Marques</a></span> - <span><a href="#contact">Contact</a></span>
                           
                        </p>
                       
                    </div>
                </section>
            </div>

        );
    }
}

export default Header;
