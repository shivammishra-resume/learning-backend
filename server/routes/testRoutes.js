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
router.get("/internships/:id", (req, res) => {
  res.json({ internshipId: req.params.id });
});
router.get("/internships", (req, res) => {
  const status = req.query.status;
  res.json({ filterBy: status });
});
router.get("/users/:id", (req, res) => {
 res.json({ userId: req.params.id });
});
router.get("/users", (req, res) => {
    const role = req.query.role;
 res.json({ userRole: role });
});



module.exports = router;
