const express = require('express'); 
const router = express.Router();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog');
let Post = require('../models/post');
let Media = require('../models/media');
let Page = require('../models/page');
let Slider = require('../models/slider')

const multer = require('multer');
const upload = multer({ dest: 'public/images/uploads/' });
const uploadSlider = multer({ dest: 'public/images/slider/' })

//render admin dashboard
router.route('/')
    .all((req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.redirect('/error');
        }
    })
    .get((req, res) => { 
        res.render('admin', {route: 'ADMIN'}); 
    }) 

//render post route
router.route('/post')   
    .all((req, res, next) => {  
        if (req.user) { 
            next(); 
        } else {
            res.redirect('/error');  
        } 
    })
    .get((req, res) => {
        Post.find(function(err, posts) {
            if (err) { 
                res.send(err); 
            } else { 
                res.render('admin',{route: 'POST', data: posts});
            }
        })          
    })

router.route('/add-post')
    .all((req, res, next) => { 
        if (req.user) {  
            next();
        } else {
            res.redirect('/error'); 
        } 
    })
    .get((req, res) => { 
        Media.find(function(err, media) {
            if (err) {             
                res.render('admin', {route: 'ADD_POST'});
                console.log('images not found!');
            } else { 
                res.render('admin', {route: 'ADD_POST', mediaData: media});
            }
        })
        
        
    })
    .post((req, res)=>{
        console.log(req.body) 
        let date = new Date();
        let post = new Post();      
        post.title = req.body.title;
        post.content = req.body.content;
        post.date = date;
        post.thumbnail = req.body.thumbnail;
        post.gallery = req.body.gallery;

        post.save((err) => {
            if (err) { 
                res.send(err); 
            }      
            else {
                res.redirect('/admin/post'); 
            }            
        });
    })

//render media route
router.route('/media')
    .all((req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.redirect('/error');
        } 
    })
    .get((req, res) => {
        Media.find(function(err, media) {
            if (err) { 
                res.send(err); 
            } else { 
                res.render('admin', {route: 'MEDIA', data: media});
            }
        })          
    })

router.route('/add-media')
    .all((req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.redirect('/error');
        } 
    })
    .get((req, res)=>{
        res.render('admin', {route: "ADD_MEDIA"})
    })

    .post(upload.single('mediaImage'), function (req, res, next) {
        let media = new Media();
        media.name = req.file.originalname;
        media.url = req.file.path.replace('public', '');
        media.save((err) => {
            if (err) { 
                res.send(err); 
            }      
            else {
                res.redirect('/admin/media') 
            }            
        });
    })

//render pages route
router.route('/pages')
    .get((req, res)=>{
        Page.find(function(err, data) {
            if (err) { 
                res.send(err); 
            } else { 
                res.render('admin', {route: 'PAGE', data: data});
            }
        })
    })

router.route('/add-page')
    .get((req, res)=>{
        Page.find(function(err, data) {
            if (err) { 
                res.send(err); 
            } else { 
                res.render('admin', {route: 'ADD_PAGE', data: data});
            }
        })
        
    })
    .post((req, res)=>{
        let page = new Page();
        page.title = req.body.title;
        page.content = req.body.content;
        page.level = req.body.level;  
        page.save((err) => { 
            if (err) { 
                res.send(err); 
            }      
            else {
                res.redirect('/admin/pages') 
            }
        })
    })
    
    //slider
    router.route('/slider')
    .all((req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.redirect('/error');
        } 
    })
    .get((req, res) => {
        Slider.find(function(err, slider) {
            if (err) { 
                res.send(err); 
            } else { 
                console.log(slider)
                res.render('admin', {route: 'SLIDER', data: slider});
            }
        })          
    })
    .post(uploadSlider.single('sliderImage'), function (req, res, next) {
        let slider = new Slider();
        slider.url = req.file.path.replace('public', '');
        slider.save((err) => {
            if (err) { 
                res.send(err); 
            }      
            else {
                res.redirect('/admin/slider') 
            }            
        });
    })


module.exports = router;
