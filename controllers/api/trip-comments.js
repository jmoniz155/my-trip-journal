const router = require('express').Router();
const { tripComments, Trip } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const tripCommentsData = await tripComments.findAll({
        include: [{ model: Trip }],
      });
      res.status(200).json(tripCommentsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.get('/:id', async (req, res) => {
  try {
    const tripCommentsData = await tripComments.findByPk(req.params.id, {
      include: [{ model: Trip }],
    });

    if (!tripCommentsData) {
      res.status(404).json({ message: 'No Trip Comments found with that id!' });
      return;
    }

    res.status(200).json(tripCommentsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
    try {
      const tripCommentsData = await tripComments.create({
        tripComments_id: req.body.tripComments_id,
      });
      res.status(200).json(tripCommentsData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
router.delete('/:id', async (req, res) => {
    try {
      const tripCommentsData = await tripComments.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!tripCommentsData) {
        res.status(404).json({ message: 'No  Trip Comments found with that id!' });
        return;
      }
  
      res.status(200).json(tripCommentsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
  module.exports = router;
