const router = require('express').Router();
const { Trip, tripDetails, tripComments} = require('../../models');
const withAuth = require("../../util/withAuth")
router.post("/", withAuth, async (req, res) => {
    try {
      const newTrip = await Trip.create({
        location: req.body.location,
        startDate:  req.body.startDate,
        endDate:  req.body.endDate,
        user_id: req.session.userId,
      });
      await newTrip.addtripDetails({
        rating: req.body.rating,
        food: req.body.food,
        experience: req.body.experience,
        lesson:  req.body.lesson,
        revisit: req.body.revisit,
        
      })
      res.status(200).json(newTrip);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// router.post("/", async (req, res) => {
//     try {
//       const newtripDetails = await tripDetails.create(req.body);
//       res.status(200).json(newtripDetails);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });

router.get('/', async (req, res) => {
  try {
    const tripData = await Trip.findAll(
      {where: {
        user_id: req.session.user_id,
    }},
    );
    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  try {
    const tripDetailsData = await Trip.findByPk(req.params.id, {
      include: [{ model: tripDetails, tripComments }],
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


router.delete("/:id", async (req, res) => {
try {
    const tripData = await Trip.destroy({
    where: {
        id: req.params.id,
        user_id: req.session.user_id,
    },
    });

    if (!tripData) {
    res.status(404).json({ message: "No Trip found with this id!" });
    return;
    }

    res.status(200).json(tripData);
} catch (err) {
    res.status(500).json(err);
}
});



module.exports = router;