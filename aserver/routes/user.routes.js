const express = require("express");
const userController = require("../controller/user.controller");
const router = express.Router();

router
    .route("/register")
    .post(userController.signup)
module.exports = router; 