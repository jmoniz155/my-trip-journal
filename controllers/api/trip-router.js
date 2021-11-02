const router = require('express').Router();
const { User, Trip } = require('../../models');

router.post("/", async (req, res) => {
    try {
      const newTrip = await Trip.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newProject);
    } catch (err) {
      res.status(400).json(err);
    }
  });
