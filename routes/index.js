//This will be a sort of table of contents for which routes we have and how we get to them, which is useful as we scale

const wikiRouter = require('./wiki');
const userRouter = require('./user');
const express = require('express');
const router = express.Router();




router.use('/wiki', wikiRouter);

module.exports = router;
