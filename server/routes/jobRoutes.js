const express = require("express");
const { getJobs, postJob } = require("../controllers/jobController");

const router = express.Router();

router.get("/", getJobs);
router.post("/", postJob);

module.exports = router;