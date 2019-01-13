import React, { Component } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Projects extends Component {
    render() {
        return(
            <section id="projects" className="projects">
                <Container>
                    <h2 className="section-heading">Moje projekty</h2>
                    <Row>                   
                    <Link to="/portfolio">
                        <Button color="default">Moje portfolio</Button>
                    </Link>   
                    </Row>
                </Container>
            </section>
        )
    }
} 
export default Projects;