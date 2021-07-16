const express = require("express");
const Project = require("./model");
const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.status(200).json({ message: "get all projects" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
