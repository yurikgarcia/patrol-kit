const express = require("express");
const router = express.Router();
const db = require("../config/dbConn.js").connect();

router.get("/", async (req, res, next) => {
  try {
    const users = await db.Users.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
