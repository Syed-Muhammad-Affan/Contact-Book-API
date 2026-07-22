const authServices = require('../services/authServices');
const { StatusCodes } = require('http-status-codes');

const register = async (req, res) => {
  const result = await authServices.register(req.body);

  res.status(StatusCodes.CREATED).json({
    success: true,
    message: 'User register successfully',
    data: result,
  });
};

const login = async (req, res) => {
  const result = await authServices.login(req.body);

  res.status(StatusCodes.OK).json({
    success: true,
    message: 'User login successfully',
    data: result,
  });
};

module.exports = { register, login };
