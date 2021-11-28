const router = require('express').Router();
const { Velo } = require('../db/models');
const authMiddleware = require('../middleware/auth');

router.route('/')
  .get(authMiddleware, (req, res) => res.render('personal'))
  .post(async (req, res) => {
    const {
      nameRoute,
      lengthRoute,
      crowdedPoint,
      startX,
      startY,
      finishX,
      finishY,
    } = req.body;
    const startPoint = `${startX}, ${startY}`;
    const finishPoint = `${finishX}, ${finishY}`;

    const newRoute = await Velo.create({
      nameRoute,
      lengthRoute,
      crowdedPoint,
      startPoint,
      finishPoint,
      authorRoute: req.session.user.id,
    });

    res.json({ created: true });
  });

module.exports = router;
