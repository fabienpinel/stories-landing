import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import './Vespa.scss';

class Vespa extends Component {
    render() {
        return (
            <div id="concept">
                <div className="vespa-container">
                    <Row>
                        <Col xs={12} sm={12} md={6}>
                            <img className="vespa" src="/assets/img/vespa.png" />
                        </Col>
                        <Col xs={12} sm={12} md={6}>
                            <div className="vespa-text-container">
                                <h1>Concept</h1>
                                <p>Suivez notre petit singe, il vous fera découvrir notre boutique de Textile et Chaussures sneakers pour Homme, Femme et Enfant. Nous proposons également des sacs à main et des foulards.</p>
                                <p>Pour ne rien rater, rejoignez nous sur Facebook et Instagram.</p>
                                <div className="social-networks-container">
                                    <span className="pads">
                                        <div className="fb-like" data-href="https://www.facebook.com/Stories-La-Haye-du-Puits-782857888481514/" data-layout="button_count" data-action="recommend" data-size="large" data-show-faces="false" data-share="false"></div>
                                    </span>
                                    <span>
                                        <a href="https://www.instagram.com/stories_lhdp/" target="_blanck">
                                            <img src="/assets/img/instagram-button.png" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

        );
    }
}

export default Vespa;
