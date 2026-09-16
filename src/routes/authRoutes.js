const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");

const {
    registerUser,
    loginUser,
    getMe
} = require("../controllers/authController");

const router = express.Router();

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Get logged-in user
router.get("/me", authMiddleware, getMe);

module.exports = router;