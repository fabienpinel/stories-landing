import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import './Brands.scss';

class Brands extends Component {
    constructor(props) {
        super(props);

        this.state = {
            brandList: [
                {
                    name: "Adidas",
                    logo: "adidas-trefoil-logo.png"
                },
                {
                    name: "Arena",
                    logo: "ARENA.png"
                },
                {
                    name: "Art",
                    logo: "ART 02-art.jpg"
                },
                {
                    name: "Asics",
                    logo: "Asics.jpg"
                },
                {
                    name: "Benson And Cherry",
                    logo: "Benson and cherry.jpg"
                },
                {
                    name: "Cabia",
                    logo: "Cabia.jpg"
                },
                {
                    name: "Converse",
                    logo: "Converse.jpg"
                },
                {
                    name: "Desigual",
                    logo: "desigual-logo.png"
                },
                {
                    name: "Dkode",
                    logo: "Dkode.jpg"
                },
                {
                    name: "Grain de Sable",
                    logo: "grain-de-sable.jpg"
                },
                {
                    name: "JOTT",
                    logo: "Jott.jpg"
                },
                {
                    name: "Kaporal",
                    logo: "Kaporal.jpg"
                },
                {
                    name: "La Marine",
                    logo: "la marine.png"
                },
                {
                    name: "Lacoste",
                    logo: "lacoste.png"
                },
                {
                    name: "Lee",
                    logo: "Lee.jpg"
                },
                {
                    name: "Les Tropéziennes",
                    logo: "les trope.jpg"
                },
                {
                    name: "Armistice",
                    logo: "logo armistice-chaussures.jpg"
                },
                {
                    name: "Les Petites Bombes",
                    logo: "lpb.jpg"
                },
                {
                    name: "Mini Molly",
                    logo: "mini_molly.jpg"
                },
                {
                    name: "Molly Bracken",
                    logo: "molly bracken.png"
                },
                {
                    name: "New Balance",
                    logo: "New_Balance.png"
                },
                {
                    name: "Nike",
                    logo: "Nike.jpg"
                },
                {
                    name: "Oakwood",
                    logo: "Oakwood.jpg"
                },
                {
                    name: "Pako Litto",
                    logo: "pako-litto.png"
                },
                {
                    name: "Pepe Jeans",
                    logo: "Pepe_Jeans_logo.png"
                },
                {
                    name: "Petrol Industry",
                    logo: "Petrol ind.jpg"
                },
                {
                    name: "PUMA",
                    logo: "PUMA.png"
                },
                {
                    name: "Ruckfield",
                    logo: "Ruckfield.png"
                },
                {
                    name: "TBS",
                    logo: "TBS.png"
                },
                {
                    name: "UMBRO",
                    logo: "UMBRO.png"
                }, {
                    name: "Vans",
                    logo: "vans-logo.jpg"
                },
                {
                    name: "Victoria",
                    logo: "Victoria.jpg"
                },
                {
                    name: "Zag",
                    logo: "zag.jpg"
                }
            ]
        };
    }

    render() {
        return (
            <section id="brands" className="brands">
                <Row>
                    <Col sm={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
                        <h1>Nos marques</h1>
                        <div className="brand-list-container">

                            {this.state.brandList.map(function (brand, index) {
                                return (
                                    <div
                                        className="brand-container"
                                        key={brand.name}>
                                        <img
                                            src={"/assets/img/brands/" + brand.logo} />
                                        {/* <span>
                                            {brand.name}
                                        </span> */}

                                    </div>



                                );
                            })}
                        </div>
                    </Col>
                </Row>
            </section>
        );
    }
}

export default Brands;
