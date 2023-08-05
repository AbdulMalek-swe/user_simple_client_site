const express = require('express');
const cors = require("cors");
const app = express();
app.use(express.json()); 
app.use(cors()) 
app.use("/images", express.static("images"))
app.use(express.urlencoded({ extended: true }))
const userRoute= require('./routes/user.routes');
const noteRoute= require('./routes/note.routes');
app.use("/api/v1/", userRoute);

app.use("/api/v1/", noteRoute);
   
module.exports = app;  