const express = require("express");
const router = express.Router();
const usersModel = require("../models/users.jsx");

router.get("/", async (req, res, next) => {
  try {
    const users = await usersModel.find();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
