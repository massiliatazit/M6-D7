const express = require("express");
const Model = require("../../utils/model");
const Reviews = new Model("reviews");

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const singleReview = await Reviews.findById(req.params.id);
    res.send(singleReview);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updateReview = await Reviews.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.send(updateReview);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const newReview = await Reviews.save(req.body);
    res.send(newReview);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Reviews.findByIdAndDelete(req.params.id);
    res.send("EXECUTED");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const allReviews = await Reviews.findOne(req.query);
    res.send(allReviews);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
