const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const checkJwt = require("./../middleware/checkAuth");

router.post('/add-comment', checkJwt, (req, res) => {
    console.log
})

module.exports = router;
