const express = require("express");
const router = express.Router();   // “Create a mini Express app just for routes.”, this router holds routes, gets plugged into main app

const testController = require("../controllers/testController");
const helloController = require("../controllers/testController");

router.get("/test", testController);
router.get("/hello", helloController);

module.exports = router;
