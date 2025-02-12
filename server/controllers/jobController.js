const Job = require("../models/Job");

const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const postJob = async (req, res) => {
  const { title, description, category, location } = req.body;
  try {
    const newJob = new Job({ title, description, category, location });
    await newJob.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getJobs, postJob };