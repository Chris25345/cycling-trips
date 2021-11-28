const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models/index');

router.route('/')
  .get(async (req, res) => {
    res.render('register');
    if (req.session.isAuth) {
      res.redirect('/personal/create');
    }
  })
  .post(async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ username, email, password: hashedPassword });
      req.session.user = user;
      // console.log("req.session.user", req.session.user);
    } catch (error) {
      console.error(error);

      return res.status(401).json({ registrated: false });
    }
    req.session.isAuth = true;
    res.json({ registrated: true });
  });
module.exports = router;
