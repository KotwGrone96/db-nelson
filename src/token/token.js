const jwt = require('jsonwebtoken');

const getToken = (payload) => {
  const newToken = jwt.sign(payload, process.env.SECRET, { expiresIn: '1d' });
  return newToken;
};

module.exports = { getToken };
