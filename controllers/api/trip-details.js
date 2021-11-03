const router = require('express').Router();
const { User, Trip, tripDetails, } = require('../../models');

//grabbbing all tripDetails
router.get('/', async (req, res) => {
    try {
      const tripDetailsData = await tripDetails.findAll({
        include: [{ model: Trip }],
      });
      res.status(200).json(tripDetailsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  //grabbing single tripDetails
router.get('/:id', async (req, res) => {
  try {
    const tripDetailsData = await tripDetails.findByPk(req.params.id, {
      include: [{ model: Trip }],
    });

    if (!tripDetailsData) {
      res.status(404).json({ message: 'No Trip Details found with that id!' });
      return;
    }

    res.status(200).json(tripDetailsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Creating tripDetails, post request
router.post('/', async (req, res) => {
    try {
      const tripDetailsData = await tripDetails.create({
        tripDetails_id: req.body.tripDetails_id,
      });
      res.status(200).json(tripDetailsData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.delete('/:id', async (req, res) => {
  try {
    const tripDetailsData = await tripDetails.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tripDetailsData) {
      res.status(404).json({ message: 'No  Trip Details found with that id!' });
      return;
    }

    res.status(200).json(tripDetailsData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router