var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Price = require('../models/Price.js');

/* GET ALL PRICES */
router.get('/', function(req, res, next) {
  Price.find(function (err, items) {
    if (err) return next(err);
    res.json(items);
  });
});

/* GET SINGLE PRICE ARRAY BY WINETYPE(ID) */
router.get('/:id', function(req, res, next) {
  Price.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE PRICE */
router.post('/', function(req, res, next) {
  Price.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE PRICE */
router.put('/:id', function(req, res, next) {
  Price.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE PRICE */
router.delete('/:id', function(req, res, next) {
  Price.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;