const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  const cookies = req.cookies;
  console.info({ cookies });

  res.send("Hello World!");
});

module.exports = router;
