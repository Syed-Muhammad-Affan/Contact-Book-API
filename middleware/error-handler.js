const { StatusCodes } = require('http-status-codes');

const errorHandler = (err, req, res, next) => {
  const customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong',
  };

  if (err.name === 'ValidationError') {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(', ');

    customError.statuscode = 400;
  }

  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate value entered for ${Object.keys(
      err.keyValue,
    )} field, please choose another value`;

    customError.statuscode = 400;
  }

  if (err.name === 'CastError') {
    customError.msg = `No item found with id: ${err.value}`;

    customError.statuscode = 404;
  }

  res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandler;
