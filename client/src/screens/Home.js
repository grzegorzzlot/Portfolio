import React, { Component } from 'react';
import '../assets/styles/css/home.css'; 
import HeaderHome from '../components/header/headerHome/HeaderHome.js';
import Footer from '../components/footer/Footer.js';
import Me from '../components/home/me/Me.js';
import Contact from '../components/home/contact/Contact.js';
import Projects from '../components/home/projects/Projects.js';

class Home extends Component {
    render() {
        return(
            <div className="home-page">
                 <HeaderHome />
                 <Me />
                 <Projects />
                 <Contact />
                 <Footer />               
            </div>
        )
    }
} 
export default Home;