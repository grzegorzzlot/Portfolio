import React from 'react';

const PostDescription = (props)=>{
    const { content } = props;
    return(
        <div className='post-content'>
            <div 
            className='description'
            dangerouslySetInnerHTML={{__html: content}}
            > 
            </div>             
        </div>            
    )
}

export default PostDescription;