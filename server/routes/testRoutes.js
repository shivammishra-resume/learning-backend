const express = require("express");
const authMiddleware = require("../middleware/auth");

const router = express.Router();   // “Create a mini Express app just for routes.”, this router holds routes, gets plugged into main app

const testController = require("../controllers/testController");
const helloController = require("../controllers/testController");

router.get("/test", testController);
router.get("/hello", helloController);
router.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "You accessed protected data" });
});
router.get("/admin", authMiddleware, (req, res) => {
  res.json({ message: "You accessed admin data" });
});


module.exports = router;
