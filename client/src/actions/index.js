import { 
    LOAD_POST,
     LOAD_TECHNOLOGY 
    } from './constants.js';

export const loadPost = (post)=>{
    return {
        type: LOAD_POST,
        post
    }
}

export const loadTechnology = (technology)=>{
    return {
        type: LOAD_TECHNOLOGY,
        technology
    }
}