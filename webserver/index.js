"use strict"

const express = require("express");
const app = express();
const port = 8080;

app.get("/", (rec,res) => {
	res.send("<h1>ciao questo è il mio sito<h1>")});

app.get("/contatti", (rec,res) => {
	res.send("<h1>andrea damante: 1234567891<h1>")});

app.get("*", (rec,res) => {
	res.sendStatus("418")});

app.listen(port, () => {
	console.log(`listening on port: ${port}`)});


