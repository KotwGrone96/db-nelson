const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('HOLA EXPRESS');
});

module.exports = router;
