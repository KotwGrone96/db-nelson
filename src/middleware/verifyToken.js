const { verifyToken } = require('../token/token');

const verify = (req, res, next) => {
  try {
    const token = verifyToken(req.headers.authorization);
    if (!token) { res.redirect('/login'); return; }
    next();
  } catch (error) {
    res.redirect('/login');
  }
};

module.exports = { verify };
