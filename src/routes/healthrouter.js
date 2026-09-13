const express = require("express");

const router = express.Router();

router.get("/health", (req, res) => {
   const response = res.status(200).json({
    status: "OK",
    message: "Health check passed"
  });

  console.log(response);

  
});

module.exports = router;