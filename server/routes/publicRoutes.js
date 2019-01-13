const express = require('express');
const router = express.Router(); 

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog');   
let Slider = require('../models/slider');
let Post = require('../models/post');

router.route('/slider')  
    .get((req, res) => {
        Slider.find(function(err, data) {  
            if (err) { 
                res.send(err); 
            } else { 
                res.send(data)
            }           
        });
    })

router.route('/post')  
    .get((req, res) => {
        Post.find(function(err, posts) {
            if (err) { 
                res.send(err); 
            } else { 
                res.send(posts);
            }
        })          
    })

module.exports=router