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
                            <p className="address">
                            32 Place du Général de Gaulle
                                <br />
                                La Haye Du Puits
                                <br />
                                </p>
                                <p>
                                    Lundi - Samedi : 9h - 19h
                                    <br />
                                    Dimanche : 9h - 12h
                                </p>
                    </div>
                </section>
            </div>

        );
    }
}

export default Header;
