
const express = require("express");

const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Get logged-in user
router.get("/me", authMiddleware, getMe);

// Admin-only test route
router.get(
  "/admin/test",
  authMiddleware,
  authorizeRoles("admin"),
  (req, res) => {
    return res.status(200).json({
      success: true,
      message: "Admin access granted",
    });
  }
);

module.exports = router;
