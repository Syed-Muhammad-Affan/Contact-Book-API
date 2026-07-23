const contactRepo = require('../repository/contactRepo');
const { NotFound, BadRequest } = require('../errors/index');

const createContact = async (body, userId) => {
  body.createdBy = userId;
  const contact = await contactRepo.createContact(body);

  return contact;
};

const getAllContacts = async (userId) => {
  const contacts = await contactRepo.getAllContacts(userId);

  return contacts;
};

const getSingleContact = async (contactId, userId) => {
  const contact = await contactRepo.getSingleContact(contactId, userId);

  if (!contact) {
    throw new NotFound(`No contact found with id: ${contactId}`);
  }

  return contact;
};

const updateContact = async (body, contactId, userId) => {
  const { name, email, address } = body;

  if (name === '' || email === '' || address === '') {
    throw new BadRequest('Please provide name, email and address');
  }

  const contact = await contactRepo.updateContact(contactId, userId, body);

  if (!contact) {
    throw new NotFound(`No contact found with id: ${contactId}`);
  }

  return contact;
};

const deleteContact = async (contactId, userId) => {
  const contact = await contactRepo.deleteContact(contactId, userId);

  if (!contact) {
    throw new NotFound(`No contact found with id: ${contactId}`);
  }

  return contact;
};

module.exports = {
  createContact,
  getAllContacts,
  getSingleContact,
  updateContact,
  deleteContact,
};
