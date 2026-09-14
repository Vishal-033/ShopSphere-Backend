
// const express = require("express");

// const { registerUser } = require("../controllers/authController");

// const router = express.Router();

// // Register User
// router.post("/register", registerUser);

// module.exports = router;


const express = require("express");

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

const router = express.Router();

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

module.exports = router;