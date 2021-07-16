const express = require("express");
const Project = require("./model");
const router = express.Router();

router.get("/", (req, res, next) => {
  Project.find()
    .then((projects) => {
      res.json(projects);
    })
    .catch(next);
});

module.exports = router;
