const jwt = require("jsonwebtoken");

const userData = (req, res) => {
  const token = req.headers.authorization;
  const userData = jwt.verify(
    token,
    process.env.SECRET,
    { complete: true },
    (err, tkt) => {
      if (err) throw err;
      return tkt;
    }
  );
  const { id, idPermiso, user } = userData.payload;
  res.json({
    ok: true,
    msg: "Token valido",
    userData: { id, idPermiso, user },
  });
};

module.exports = { userData };
