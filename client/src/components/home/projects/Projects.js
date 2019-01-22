import React, { Component } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import ProjectGallery from './ProjectGallery.js';
import '../../../assets/styles/css/projectGallery.css';

class Projects extends Component {
    render() {
        return(
            <section id="projects" className="projects">
                <Container>
                    <h2 className="section-heading">Moje ostatnie projekty</h2>
                    <ProjectGallery />
                    <Row>                   
                    <Link to="/portfolio" className='btn-link'>
                        <Button color="default">Moje portfolio</Button>
                    </Link>   
                    </Row>
                </Container>
            </section>
        )
    }
} 
export default Projects;