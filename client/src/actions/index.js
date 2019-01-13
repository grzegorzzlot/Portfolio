import { LOAD_POST } from './constants.js';

export const loadPost = (post)=>{
    return {
        type: LOAD_POST,
        post
    }
}