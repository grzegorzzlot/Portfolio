import React, { Component } from 'react';
import { Container } from 'reactstrap';
import TopBar from '../TopBar.js';
import Navigation from './Navbar.js';
import '../../../assets/styles/css/header.css';

class HeaderPortfolio extends Component {

    render() {
        return(
            <header className="header">
                <Container fluid={true}>
                    <TopBar/>
                    <Navigation/>                    
                </Container>
            </header>
        )
    }
}

export default HeaderPortfolio;