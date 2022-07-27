const connection = require('../db/connection');
const { getToken } = require('../token/token');

const login = (req, res) => {
  const { user, pass, remember } = req.body;

  if (user === undefined || pass === undefined || remember === undefined) {
    res.send('Faltan datos en el cuerpo de la petición');
    return;
  }

  try {
    connection.query(`SELECT * FROM usuarios WHERE user="${user}" AND pass="${pass}"`, (err, result) => {
      if (err) throw err;
      if (result.length === 0) {
        res.json({ msg: 'No se ha encontrado el usuario', notFound: true, ok: false });
        return;
      }
      const {
        idStatus, id, idPermiso,
      } = result[0];

      const payload = {
        id, user, pass, idPermiso,
      };
      switch (idStatus) {
        case 2:
          res.json({ msg: 'El usuario se encuentra inactivo', notFound: false, ok: false });
          break;
        case 1:
          if (remember) {
            const token = getToken(payload, '30d');
            connection.query(`UPDATE usuarios SET token="${token}" WHERE id=${id}`, (errUpdate, resultUpdate) => {
              if (errUpdate) throw errUpdate;
              res.json({
                token, ok: true, resultUpdate, userData: { id, user, idPermiso },
              });
            });
          } else {
            const token = getToken(payload, '1d');
            connection.query(`UPDATE usuarios SET token="${token}" WHERE id=${id}`, (errUpdate, resultUpdate) => {
              if (errUpdate) throw errUpdate;
              res.json({
                token, ok: true, resultUpdate, userData: { id, user, idPermiso },
              });
            });
          }

          break;
        default:
      }
    });
  } catch (err) {
    res.json(err);
  }
};

module.exports = { login };
