const Contact = require('../models/contact');

const createContact = async (body) => {
  return await Contact.create(body);
};

module.exports = { createContact };
