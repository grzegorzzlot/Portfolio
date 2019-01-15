import React, { Component } from 'react';
import HeaderPost from '../components/header/headerPost/HeaderPost.js';
import Footer from '../components/footer/Footer.js';

class AboutMe extends Component {
    render() {
        return(
            <div className="about-me">
                <HeaderPost /> 
                <Footer />               
            </div>
        )
    }
} 
export default AboutMe;