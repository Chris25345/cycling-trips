const router = require('express').Router();
const { Velo } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const userRoudes = await Velo.findAll({ where: { authorRoute: req.session.user.id }, raw: true });
    res.render('myRouds', { userRoudes });
  });

module.exports = router;
