import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopBar = ()=>{
    return(
        <Row className="top-bar">
            <Container>
                <Row>
                    <Col className="top-bar-content" md="2" xs="5">
                        <FontAwesomeIcon icon={['fas', 'envelope']}/>
                        <span>gzlot@wp.pl</span>
                    </Col>
                    <Col className="top-bar-content socials" md={{size: 3, offset:7}} xs={{size:6, offset:1}}>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
                            <FontAwesomeIcon icon={['fab', 'facebook-f']}/>
                        </a> 
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/grzegorzzlot/">
                            <FontAwesomeIcon icon={['fab', 'github']}/>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/grzegorzzlot/">
                            <FontAwesomeIcon icon={['fab', 'linkedin-in']}/>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
                            <FontAwesomeIcon icon={['fab', 'google-plus-g']}/>
                        </a>                                               
                    </Col>
                </Row>                            
            </Container>
        </Row>
    )
}

export default TopBar;