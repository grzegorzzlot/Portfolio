import React, { Component } from 'react';
import HeaderPortfolio from '../components/header/headerPortfolio/HeaderPortfolio.js';
import PortfolioContent from '../components/portfolio/PortfolioContent.js';
import Footer from '../components/footer/Footer.js';
import '../assets/styles/css/portfolio.css';

class Portfolio extends Component {
    render() {
        const router = this.props;
        return(
            <div className="portfolio">
                <HeaderPortfolio />
                <PortfolioContent router={router}/>
                <Footer />               
            </div>
        )
    }
} 
export default Portfolio;