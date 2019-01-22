import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import HeaderPost from '../components/header/headerPost/HeaderPost.js';
import Footer from '../components/footer/Footer.js';
import cms from '../assets/images/cms.svg';
import web from '../assets/images/web.svg';
import mobile from '../assets/images/mobile.svg';
import '../assets/styles/css/Offer.css';

class Offer extends Component {
    render() {
        return(
            <div className="offer">
                <HeaderPost />
                    <div className='content'>
                        <Jumbotron>
                            <Container>
                                <h1>Moja oferta</h1>
                            </Container>   
                        </Jumbotron>
                        <Container>
                            <Row>
                                <Col md='3'>
                                    <img height='150px' src={cms} alt='systemy cms'/>
                                </Col>
                                <Col md='9'>
                                    <h2>Systemy CMS</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lectus augue, bibendum at sapien quis, fringilla semper dui. Vivamus ultricies nisl eros, sed tristique sapien tempus sed. Cras cursus venenatis efficitur. Duis volutpat fermentum condimentum. Cras pretium arcu odio, vitae consequat mi egestas in. Nam maximus, ipsum in laoreet porta.</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='3'>
                                    <img height='150px' src={web} alt='aplikacje internetowe'/>
                                </Col>
                                <Col md='9'>
                                    <h2>Aplkacje internetowe</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lectus augue, bibendum at sapien quis, fringilla semper dui. Vivamus ultricies nisl eros, sed tristique sapien tempus sed. Cras cursus venenatis efficitur. Duis volutpat fermentum condimentum. Cras pretium arcu odio, vitae consequat mi egestas in. Nam maximus, ipsum in laoreet porta.</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='3'>
                                    <img height='150px' src={mobile} alt='aplikacje mobilne'/>
                                </Col>
                                <Col md='9'>
                                    <h2>Aplikacje mobilne</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lectus augue, bibendum at sapien quis, fringilla semper dui. Vivamus ultricies nisl eros, sed tristique sapien tempus sed. Cras cursus venenatis efficitur. Duis volutpat fermentum condimentum. Cras pretium arcu odio, vitae consequat mi egestas in. Nam maximus, ipsum in laoreet porta.</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>               
                <Footer />               
            </div>
        )
    }
} 
export default Offer;