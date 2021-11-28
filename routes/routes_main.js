const express = require('express');

const router = express.Router();
const { Velo } = require('../db/models');

router.get('/', async (req, res) => {
  const routes = await Velo.findAll({ raw: true });
  res.render('main', { routes });
});

module.exports = router;
