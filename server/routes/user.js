const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const User = require("../models/User");

// GET user
router.get("/me", fetchuser, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});

// UPDATE user
router.put("/update", fetchuser, async (req, res) => {
  const { name, phone } = req.body;

  const updated = await User.findByIdAndUpdate(
    req.user.id,
    { name, phone },
    { new: true }
  ).select("-password");

  res.json(updated);
});

module.exports = router;