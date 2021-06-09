var Posts = require('../models/Posts');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var multer = require('multer');
var fs = require('fs');


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/posts/')
    },
    filename: (req, file, cb) => {
        let ext = file.originalname.substring(file.originalname.indexOf(".") + 1);
        cb(null, file.fieldname + '-' + Date.now() + "." + ext)
    }
});
var upload = multer({
    storage: storage
});

/* GET ALL posts */
router.get('/', function(req, res, next) {
    Posts.find(function(err, posts) {
        if (err) return next(err);
        res.json(posts);
    });
});

/* GET SINGLE PRODUCT BY ID */
router.get('/:id', function(req, res, next) {
    Posts.findById(req.params.id, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE POST */
router.post('/', upload.single('image'),
    function(req, res) {
        console.log(req.file)
        let post = req.body;
        post.title = req.body.title
        post.image = req.body.image != 'undefined' ? req.file.filename : null
        post.description = req.body.description
        post.design = req.body.design
        post.product_link = req.body.product_link
        Posts.create(post, function(err, post) {
            if (err) return next(err);
            res.json(post);
        });
    });

/* UPDATE POST */
router.put('/:id', function(req, res, next) {
    console.log(req.body);
    Posts.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE POST */
router.delete('/:id', function(req, res, next) {
    Posts.findByIdAndRemove(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
module.exports = router;