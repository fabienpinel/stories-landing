import React, { Component } from 'react';
import './Contact.scss';

class Contact extends Component {
    render() {
        return (
            <div id="contact">
                <section className="contact">
                    <div className="contact-container">
                        <h1>Nous trouver</h1>
                        <div>
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
                    </div>
                </section>
            </div>

        );
    }
}

export default Contact;
