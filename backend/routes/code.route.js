const express = require("express");
const { protectRoute } = require("../middleware/protectRoute");
const { save, send } = require("../controllers/save.controller");
const router = express.Router();

router.post("/save", protectRoute,save);
router.get("/send",protectRoute,send);

module.exports = router;