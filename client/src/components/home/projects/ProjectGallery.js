import React from 'react';
import {connect} from 'react-redux';
import { Card, CardImg, CardTitle } from 'reactstrap';
import {Link} from 'react-router-dom';
import backend from '../../../constants/backend.js';

const ProjectGallery = (props)=>{
    const {url} = backend;
    const {gallery} = props;
    let items = [];
    items = gallery.map((i, index)=>
        <div className='tile' key={index}>
            <Card>
                <CardImg src={url+i.thumbnail} alt={index}/>
                <Link to={`/projekty/${encodeURIComponent(i.title)}`} ><CardTitle>{i.title}</CardTitle></Link>
            </Card>
        </div>
    );
    return(
        <div className='project-gallery'>{items}</div>
    )
}

const mapStateTOProps = (state)=>{
    const {post} = state.postData;
    const len = post.length;
    let gallery = []
    if(len>0) {
        gallery = [
            {thumbnail:post[len-1].thumbnail,title:post[len-1].title},
            {thumbnail:post[len-2].thumbnail,title:post[len-2].title}
        ]; 
    }    
    return {gallery: gallery}    
}

export default connect(mapStateTOProps, null)(ProjectGallery);