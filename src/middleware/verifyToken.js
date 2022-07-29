const { verifyToken } = require("../token/token");

const verify = (req, res, next) => {
  try {
    const token = verifyToken(req.headers.authorization);
    if (!token || token === undefined) {
      res.json({
        msg: "Ha ocurrido un error en la verificación del token",
        ok: false,
      });
      return;
    }
    next();
  } catch (error) {
    res.json({
      error,
      msg: "El Token no existe o está expirado",
      ok: false,
    });
  }
};

module.exports = { verify };
