import React, { Component } from 'react';
import { Container } from 'reactstrap';
import TopBar from '../TopBar.js';
import Navigation from './Navbar.js';
import Slider from './Slider.js';
import '../../../assets/styles/css/header.css';
class HeaderHome extends Component {

    render() {
        return(
            <header className="header home">
                <Container fluid={true}>
                    <TopBar/>
                    <Navigation/>                    
                </Container>
                <Slider />
            </header>
        )
    }
}

export default HeaderHome;