const userRepo = require('../repository/userRepo');
const { Unauthenticated, BadRequest } = require('../errors/index');

const register = async (body) => {
  const user = await userRepo.createUser(body);
  const token = user.createJWT();

  return {
    user,
    token,
  };
};

const login = async ({ email, password }) => {
  if (!email || !password) {
    throw new BadRequest('Please provide email and password');
  }

  const user = await userRepo.findByEmail(email);

  if (!user) {
    throw new Unauthenticated('Invalid Credentials');
  }

  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new Unauthenticated('Invalid Credentials');
  }

  const token = user.createJWT();

  return {
    user,
    token,
  };
};

module.exports = { register, login };
