import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import FindMe from './FindMe.js';
import '../../assets/styles/css/footer.css'

class Footer extends Component {
    render() {
        return(
            <div className="footer">
                <div className="footer-top">
                    <Container>
                        <Row>
                            <Col xs="12" md="4">
                                <h3>Who we are </h3>
                                <p>Magnis modipsae voloratati andigen daepeditem quiate re porem que aut labor. Laceaque eictemperum quiae sitiorem rest non restibusaes maio es dem tumquam. More about us</p>
                            </Col>
                            <FindMe />
                            <Col xs="12" md="4">
                                <h3>Free updates</h3>
                                <p>Magnis modipsae voloratati andigen daepeditem quiate re porem que aut labor. Laceaque eictemperum quiae sitiorem rest non restibusaes maio es dem tumquam. More about us</p>
                            </Col>
                        </Row>
                    </Container>
                </div>                 
                <div className="footer-bottom">
                    <span className="copyrights">Grzegorz Zlot 2019</span>
                </div> 
            </div>
        )
    }
} 
export default Footer;