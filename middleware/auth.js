const { Unauthenticated } = require('../errors/index');
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Unauthenticated('Authentication Invalid');
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.id, name: payload.name };
    next();
  } catch (error) {
    throw new Unauthenticated('Authentication Invalid');
  }
};

module.exports = auth;
