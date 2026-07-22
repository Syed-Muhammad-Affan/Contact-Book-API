const { StatusCodes } = require('http-status-codes');

const errorHandler = (err, req, res, next) => {
  const customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong',
  };

  res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandler;
