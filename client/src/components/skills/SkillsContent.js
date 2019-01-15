import React from 'react';
import {connect} from 'react-redux';
import { Jumbotron, Container, Row, Col, Card, CardImg, CardBody } from 'reactstrap';
import backend from '../../constants/backend.js';
import ModalWrapper from './ModalWrapper.js';

const SkillsContent = (props)=>{
    const {url} = backend;
    const technology = props.technology
    const items = technology.map((i, index)=>
        <Col xs='6' sm='4' md='3' key={index}>
            <Card>
                <CardImg top width="100%" src={url+i.url} alt={i.title} />
                <CardBody>
                    <ModalWrapper data={i}/>
                </CardBody>
            </Card>
        </Col>
    )
    return(
        <div>
            <Jumbotron>
                <Container><h1>Moje umiejętności</h1></Container>
            </Jumbotron>
            <Container><Row>{items}</Row></Container>
        </div>            
    )
}

const mapStateToProps = (state)=>{
    return {
        technology: state.technologyData.technology
    }
}

export default connect(mapStateToProps, null)(SkillsContent);