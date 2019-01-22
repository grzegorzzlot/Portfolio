import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import img from '../../../assets/images/man.svg';

class About extends Component {
    render() {
        return(
            <Col xs="12" sm="12" md="4" lg="4" className="me-content">
                <Row>
                    <Col xs="3"><img src={img} alt="obrazek"/></Col>
                    <Col xs="9">
                        <h3 className="section-subtitle">Parę słów o mnie</h3>
                        <p>Jestem ambitnym, pozytywnie nastawionym Front end developerem, który lubi uczyć się nowych rzeczy i pogłębiać swoją wiedzę.</p>                
                            <Link to="/o_mnie">
                            <Button color="default">Zobacz więcej</Button>
                            </Link>                                                
                    </Col>
                </Row>                        
            </Col>
        )
    }
}

export default About;