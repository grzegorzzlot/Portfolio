import React from 'react';
import { Container, Row } from 'reactstrap';
import About from './About.js';
import Offer from './Offer.js';
import Skills from './Skills.js';

const Me = () => {
    return(
        <section id="me" className="me">
            <Container>
                <h2 className="section-heading">O mnie</h2>
                <Row>                   
                    <About />
                    <Skills />
                    <Offer />
                </Row>
            </Container>
        </section>        
    )
}

export default Me;