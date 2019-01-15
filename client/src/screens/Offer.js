import React, { Component } from 'react';
import HeaderPost from '../components/header/headerPost/HeaderPost.js';
import Footer from '../components/footer/Footer.js';

class Offer extends Component {
    render() {
        return(
            <div className="offer">
                <HeaderPost />
                <Footer />               
            </div>
        )
    }
} 
export default Offer;