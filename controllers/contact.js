const contactServices = require('../services/contactServices');
const { StatusCodes } = require('http-status-codes');

const createContact = async (req, res) => {
  const result = await contactServices.createContact(req.body, req.user);

  res.status(StatusCodes.CREATED).json({
    success: true,
    message: 'Contact is created',
    data: result,
  });
};

module.exports = { createContact };
