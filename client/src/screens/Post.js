import React, { Component } from 'react';
import {connect} from 'react-redux';
import HeaderPost from '../components/header/headerPost/HeaderPost.js';
import PostContent from '../components/post/postContent.js';
import Footer from '../components/footer/Footer.js';
import '../assets/styles/css/post.css';

class Post extends Component {       
    render() { 
        let items = {
            title: '',
            category: '',
            gallery: [],
            connect: '',
            technology: []
        }
        let url = decodeURIComponent(this.props.match.params.post);
        const collection = this.props.post;
        collection.forEach(i => {            
            if(i.title===url) {
                items = i;
            }    
        });               
        return(
            <div className="post">
                <HeaderPost />
                <PostContent items={items} />    
                <Footer />               
            </div>
        )
    }
} 

const mapStateToProps = (state)=>{
    return {
        post: state.postData.post
    }
}

export default connect(mapStateToProps, null)(Post);