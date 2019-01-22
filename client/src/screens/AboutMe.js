import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col} from 'reactstrap';
import HeaderPost from '../components/header/headerPost/HeaderPost.js';
import Footer from '../components/footer/Footer.js';
import img from '../assets/images/ja.jpg';
import '../assets/styles/css/aboutMe.css';

class AboutMe extends Component {
    render() {
        return(
            <div className="about-me">
                <HeaderPost />
                    <div className='content'>
                        <Jumbotron>
                            <Container>
                                <h1>O mnie</h1>
                            </Container>
                        </Jumbotron>
                        <Container>
                            <Row>
                                <Col xs='12' sm='12' md='6' className='tiles'>
                                    <img src={img} alt='Grzegorz Zlot'/>
                                </Col>
                                <Col xs='12' sm='12' md='6' className='tiles'>
                                    <p>Witaj na mojej stronie! Nazywam się Grzegorz Zlot i jestem początkującym web-deweloperem. Swoją naukę rozpocząłem w listopadzie 2017 roku i od tej pory stale poszerzam swoją wiedzę. Choć początkowo skupiałem się na technologiach front-endowych, to z biegiem czasu zainteresowałem się też technologiami "pracującymi" po stronie serwera. Aktualnie szukam pracy stacjonarnej na stanowisku Junior Front-End/Web Developer, chociaż jestem też otwarty na inne formy współpracy.</p>
                                </Col>
                            </Row>
                        </Container>
                    </div> 
                <Footer />               
            </div>
        )
    }
} 
export default AboutMe;