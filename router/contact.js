const express = require('express');
const Router = express.Router();
const { register, login } = require('../controllers/auth');
const { createContact } = require('../controllers/contact');

Router.route('/').post(createContact);

module.exports = Router;
