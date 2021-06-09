var Testimonials = require('../models/Testimonials');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var multer = require('multer');
var fs = require('fs');



/* GET ALL posts */
router.get('/', function(req, res, next) {
    Testimonials.find(function(err, posts) {
        if (err) return next(err);
        res.json(posts);
    });
});

/* GET SINGLE PRODUCT BY ID */
// router.get('/:id', function(req, res, next) {
//     Testimonials.findById(req.params.id, function(err, post) {
//         if (err) return next(err);
//         res.json(post);
//     });
// });

/* SAVE POST */
router.post('/', function(req, res) {

    let testimonial = req.body;
    testimonial.name = req.body.name;


    Testimonials.create(testimonial, function(err, testimonial) {
        if (err) return next(err);
        res.json(testimonial);
    });
});

// /* UPDATE POST */
// router.put('/:id', function(req, res, next) {
//     console.log(req.body);
//     Posts.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
//         if (err) return next(err);
//         res.json(post);
//     });
// });

/* DELETE POST */
router.delete('/:id', function(req, res, next) {
    Testimonials.findByIdAndRemove(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
module.exports = router;