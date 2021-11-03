const router = require('express').Router();
const { Trip, tripDetails, } = require('../../models');

router.post("/", async (req, res) => {
    try {
      const newTrip = await Trip.create(req.body);
      res.status(200).json(newTrip);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.post("/", async (req, res) => {
    try {
      const newtripDetails = await tripDetails.create(req.body);
      res.status(200).json(newtripDetails);
    } catch (err) {
      res.status(400).json(err);
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