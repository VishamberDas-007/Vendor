const mongoose = require("mongoose"); // importing the mongoose package
require("dotenv").config();

const category = process.env.URL1; // initializing the url
const vendor = process.env.URL2; // initializing the url

// connecting to the mongoose db
mongoose
	.connect(vendor, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Database connected successfully!!!!!!!");
	})
	.catch((error) => {
		console.log("connection error:", err);
	});
