const contactRepo = require('../repository/contactRepo');

const createContact = async (body, user) => {
  body.createdBy = user.userId;
  const contact = await contactRepo.createContact(body);

  return contact;
};

module.exports = { createContact };
