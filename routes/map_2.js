const express = require('express');

const map = express.Router();

map.get('/', (req, res) => res.render('map_2'));

module.exports = map;
