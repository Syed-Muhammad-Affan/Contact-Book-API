const express = require('express');
const Router = express.Router();
const { register, login } = require('../controllers/auth');
const {
  createContact,
  getAllContacts,
  getSingleContact,
  updateContact,
  deleteContact,
} = require('../controllers/contact');

Router.route('/').post(createContact).get(getAllContacts);
Router.route('/:id')
  .get(getSingleContact)
  .patch(updateContact)
  .delete(deleteContact);

module.exports = Router;
