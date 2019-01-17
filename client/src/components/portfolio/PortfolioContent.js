import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Card, CardImg, CardBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import backend from '../../constants/backend.js';

class PortfolioContent extends Component {
    render() {
        const { url } = backend;
        const { post } = this.props;
        const items = post.map((i,index)=>            
            <Col key={index} xs='12' sm='6' md='4'>         
                <Card>
                    <CardImg top width="100%" src={url+i.thumbnail}/>
                    <CardBody>
                        <h3>{i.title}</h3>
                        <Link to={`/projekty/${encodeURIComponent(i.title)}`}>
                            <Button>Zobacz projekt</Button>
                        </Link>
                    </CardBody>
                </Card>
            </Col>            
        );
        return(
            <div className='content'>
                <Jumbotron>
                    <Container>
                        <h1>Galeria portfolio</h1>
                    </Container>                   
                </Jumbotron>
                <Container>
                    <Row>{items}</Row>
                </Container>
                
            </div>
        )
    }
}

const mapStateTOProps = (state)=>{
    return {
        post: state.postData.post
    }
}

export default connect(mapStateTOProps, null)(PortfolioContent);