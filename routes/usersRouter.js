const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Users route");
});

router.get("/new", (req, res) => {
    res.send("Users/new route");
});

module.exports = router;