import React from 'react';
import { Row, Col } from 'reactstrap';
import {connect} from 'react-redux';
import backend from '../../constants/backend.js'

const PostTechnology = (props)=>{
    let items = [];
    const {technology, fullData} = props
    const {url} = backend;
    fullData.forEach(i => {
        technology.forEach(j => {
            if(j===i.title) {
                items.push({title: i.title, url:i.url});
            }
        });    
    });
    const content = items.map((i, index)=>
        <Col key={index} xs='6' sm='4' title={i.title}>
            <img src={url+i.url} alt={i.title} />   
        </Col>
    );
    return(
        <div>
            <h2>Użyte technologie:</h2>
            <div className='technology-container'>
                <Row>{content}</Row>
            </div>
        </div>                   
    )
}

const mapStateToProps = (state)=>{
    return {
        fullData: state.technologyData.technology
    }
}

export default connect(mapStateToProps, null)(PostTechnology);