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
                        <img src="/assets/img/vespa.png" />
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                        <div className="vespa-text-container">
                            <h1>Concept</h1>
                            <p>Venez découvrir notre univers à partir du 30 Mars à La Haye Du Puits.</p>
                        </div>
                    </Col>
                </Row>
                </div>
            </div>

        );
    }
}

export default Vespa;
