import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import PostGallery from './postGallery.js';
import PostDescription from './postDescription.js';
import PostTechnology from './postTechnology.js';

const PostContent = (props)=>{
    const { title, gallery, content, category, technology } = props.items;
    return(
        <div className='content'>
            <Jumbotron>
                <Container><h1>{title}</h1></Container>
            </Jumbotron>
            <Container>
                <h2 className='category'>Kategoria: {category}</h2>
                <PostGallery gallery={gallery}/>
                <PostDescription content={content} />
                <PostTechnology technology={technology} />
            </Container>
        </div>            
    )
}

export default PostContent;