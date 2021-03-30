const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
 
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(morgan('dev', { skip: (req, res) => process.env.NODE_ENV.trim() === 'test' }));

app.use("/api/pokedex", require("./api/pokedex"));
 
app.use(express.static("public"));

app.listen(8000, () => console.log("Server is listening on port 8000"));

module.exports = app;