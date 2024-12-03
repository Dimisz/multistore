const express = require('express');
const router = express.Router();

router.get("/", (req, res) => res.send('entry point'));

module.exports = router;
