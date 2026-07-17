const CustomApiError = require('./custom-error');
const Unauthenticated = require('./unauthenticated');
const NotFound = require('./not-found');
const BadRequest = require('./bad-request');

module.exports = {
  CustomApiError,
  Unauthenticated,
  BadRequest,
  NotFound,
};
