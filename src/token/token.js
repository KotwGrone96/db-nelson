const jwt = require('jsonwebtoken');

const getToken = (payload, expiresIn) => jwt.sign(payload, process.env.SECRET, { expiresIn });

const verifyToken = (token) => {
  if (!token || token === undefined) {
    return false;
  }
  const verify = jwt.verify(token, process.env.SECRET, { complete: true }, (err, tkt) => {
    if (err) throw err;
    return tkt;
  });
  return verify;
};

module.exports = { getToken, verifyToken };
