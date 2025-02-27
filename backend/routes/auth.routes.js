const express = require("express");
const {logout, firebaseAuth,signup} = require("../controllers/auth.controllers");

const router = express.Router();  



router.post('/signup',signup);
// router.post("/signin",signin);
router.post("/firebase", firebaseAuth)
router.post('/logout',logout)

module.exports = router;    