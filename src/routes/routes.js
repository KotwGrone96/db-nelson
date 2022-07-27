const express = require('express');
const { login } = require('../functions/login');
const { verify } = require('../middleware/verifyToken');

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/login');
});

router.post('/getuser', login);

router.get('/usersList', verify, (req, res) => {
  res.send('LISTA DE USUSARIOS');
});

module.exports = router;
