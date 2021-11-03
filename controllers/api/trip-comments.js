const router = require('express').Router();
const { TripComments, Trip } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const tripCommentsData = await TripComments.findAll({
        include: [{ model: Trip }, ],
      });
      res.status(200).json(tripCommentsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.get('/:id', async (req, res) => {
  try {
    const tripCommentsData = await TripComments.findByPk(req.params.id, {
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
      const tripCommentsData = await TripComments.create({
        comments: req.body.comments,
        trip_id: req.body  //need update to match front end
      });
      res.status(200).json(tripCommentsData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
router.delete('/:id', async (req, res) => {
    try {
      const tripCommentsData = await TripComments.destroy({
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
