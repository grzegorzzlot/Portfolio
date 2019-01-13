import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import PostGallery from './postGallery.js';
import PostDescription from './postDescription.js';

const PostContent = (props)=>{
    const { title, gallery, content } = props.items;
    return(
        <div>
            <Jumbotron>
                <Container><h2>{title}</h2></Container>
            </Jumbotron>
            <Container>
                <PostGallery gallery={gallery}/>
                <PostDescription content={content} />
            </Container>
        </div>            
    )
}

export default PostContent;