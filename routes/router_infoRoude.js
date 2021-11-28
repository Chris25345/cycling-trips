const router = require('express').Router();
const { Velo } = require('../db/models');

router.route('/:id')
  .get(async (req, res) => {
    // const name = `${}`
    const infoRoute = await (await Velo.findAll({ where: { id: req.params.id }, raw: true }))[0];
    const {
      nameRoute, lengthRoute, crowdedPoint, startPoint, finishPoint,
    } = (await Velo.findAll({ where: { id: req.params.id }, raw: true }))[0];
    // console.log(infoRoute);

    res.render('infoRoude', {
      infoRoute, nameRoute, lengthRoute, crowdedPoint, startPoint, finishPoint,
    });
  });

module.exports = router;
