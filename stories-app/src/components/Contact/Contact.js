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
                                02 33 46 81 66
                            </p>
                            <p>
                                Mardi, Jeudi, Vendredi : 9h00 - 12h15  /  14h00 - 19h00
                                    <br />
                                Mercredi, Samedi : 9h00 - 12h30  /  14h00 - 19h00
                                </p>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}

export default Contact;
