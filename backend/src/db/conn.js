const mongoose = require("mongoose"); // importing the mongoose package
require("dotenv").config();

const url = process.env.URL; // initializing the url

// connecting to the mongoose db
mongoose
	.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Database connected successfully!!!!!!!");
	})
	.catch((error) => {
		console.log("connection error:", err);
	});
