import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import img from '../../../assets/images/laptop.svg';

class Offer extends Component {
    render() {
        return(
            <Col xs="12" sm="4" md="4" lg="4" className="me-content">
                <Row>
                    <Col xs="3"><img src={img} alt="obrazek"/></Col>
                    <Col xs="9">
                        <h3 className="section-subtitle">Czym się zajmuję</h3>
                        <p>Magnis modipsae que lib voloratati andigen daepeditem quiate re porem aut labor. Laceaque quiae sitiorem rest non restibusaes maio es dem tumquam core posae volor remped modis volor.</p>
                        <Link to="/oferta">
                            <Button color="default">Zobacz więcej</Button>
                        </Link>                        
                    </Col>
                </Row>                        
            </Col>
        )
    }
}

export default Offer;