const express = require("express");
const noteController = require("../controller/note.controller");
const { verifyToken } = require("../middleware/verifyToken");
const router = express.Router();

router
    .route("/notes")
    .get(noteController.getNotes)

router
    .route("/notes")
    .post(verifyToken, noteController.postNotes)
module.exports = router; 