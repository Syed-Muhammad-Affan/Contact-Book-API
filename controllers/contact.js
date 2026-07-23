const contactServices = require('../services/contactServices');
const { StatusCodes } = require('http-status-codes');

const createContact = async (req, res) => {
  const {
    user: { userId },
    body: body,
  } = req;

  const result = await contactServices.createContact(body, userId);

  res.status(StatusCodes.CREATED).json({
    success: true,
    message: 'Contact is created',
    data: result,
  });
};

const getAllContacts = async (req, res) => {
  const userId = req.user.userId;
  const result = await contactServices.getAllContacts(userId);

  res.status(StatusCodes.OK).json({
    success: true,
    message: 'All Contacts are get',
    data: result,
  });
};

const getSingleContact = async (req, res) => {
  const {
    user: { userId },
    params: { id: contactId },
  } = req;
  const result = await contactServices.getSingleContact(contactId, userId);

  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Contact is get',
    data: result,
  });
};

const updateContact = async (req, res) => {
  const {
    user: { userId },
    params: { id: contactId },
    body: body,
  } = req;
  const result = await contactServices.updateContact(body, contactId, userId);

  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Contact is updated',
    data: result,
  });
};

const deleteContact = async (req, res) => {
  const {
    user: { userId },
    params: { id: contactId },
  } = req;
  const result = await contactServices.deleteContact(contactId, userId);

  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Contact is deleted',
    data: result,
  });
};

module.exports = {
  createContact,
  getAllContacts,
  getSingleContact,
  updateContact,
  deleteContact,
};
