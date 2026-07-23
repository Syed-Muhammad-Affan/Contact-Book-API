const Contact = require('../models/contact');

const createContact = async (body) => {
  return await Contact.create(body);
};

const getAllContacts = async (userId) => {
  return await Contact.find({ createdBy: userId }).sort('createdAt');
};

const getSingleContact = async (contactId, userId) => {
  return await Contact.findOne({ createdBy: userId, _id: contactId });
};

const updateContact = async (contactId, userId, body) => {
  return await Contact.findOneAndUpdate(
    { createdBy: userId, _id: contactId },
    body,
    { runValidators: true, returnDocument: 'after' },
  );
};

const deleteContact = async (contactId, userId) => {
  return await Contact.findOneAndDelete({ createdBy: userId, _id: contactId });
};

module.exports = {
  createContact,
  getAllContacts,
  getSingleContact,
  updateContact,
  deleteContact,
};
