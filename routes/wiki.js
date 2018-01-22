const express = require('express');
const router = express.Router();
const models = require('../models');
let Page = models.Page;
let User = models.User;

module.exports = router;

router.get('/', function(req, res, next) {
  res.send('got to GET /wiki/');
});

router.post('/', function(req, res, next) {
  let page = Page.build({
    title: req.body.title,
    content: req.body.content
  });
    page.save();
    res.redirect('/');
});

router.get('/add', function(req, res, next) {
  res.render('addpage');
});


router.get('/', function(req, res, next) {
  res.redirect('/');
});

