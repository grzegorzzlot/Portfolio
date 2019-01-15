import React, { Component } from 'react';
import HeaderPost from '../components/header/headerPost/HeaderPost.js';
import Footer from '../components/footer/Footer.js';
import SkillsContent from '../components/skills/SkillsContent.js';

class Skills extends Component {
    render() {
        return(
            <div className="skills">
                <HeaderPost />
                <SkillsContent />
                <Footer />               
            </div>
        )
    }
} 
export default Skills;