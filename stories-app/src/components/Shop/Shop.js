import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import InstagramEmbed from 'react-instagram-embed'
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
                        <Col sm={12} lg={10} lgOffset={1}>
                            <Row>
                                <Col sm={12} md={4}>
                                    <InstagramEmbed
                                        url='https://www.instagram.com/p/Bh0ewAnnnz-/'
                                        hideCaption={true}
                                        containerTagName='div'
                                        protocol=''
                                        onLoading={() => { }}
                                        onSuccess={() => { }}
                                        onAfterRender={() => { }}
                                        onFailure={() => { }}
                                    />

                                </Col>
                                <Col sm={12} md={4}>
                                    <InstagramEmbed
                                        url='https://www.instagram.com/p/Bh0eTavnlII/'
                                        hideCaption={true}
                                        containerTagName='div'
                                        protocol=''
                                        onLoading={() => { }}
                                        onSuccess={() => { }}
                                        onAfterRender={() => { }}
                                        onFailure={() => { }}
                                    />
                                </Col>
                                <Col sm={12} md={4}>
                                    <InstagramEmbed
                                        url='https://www.instagram.com/p/BhJw-AqnA0u/'
                                        hideCaption={true}
                                        containerTagName='div'
                                        protocol=''
                                        onLoading={() => { }}
                                        onSuccess={() => { }}
                                        onAfterRender={() => { }}
                                        onFailure={() => { }}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </section>
            </div>
        );
    }
}

export default Shop;
