const express = require("express");
const { createOrUpdateTimer, getTimer } = require("../controller/timerController");

const router = express.Router();

router.post("/", createOrUpdateTimer);        
router.get("/:storeId", getTimer);           

module.exports = router;
