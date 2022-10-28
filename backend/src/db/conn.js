const mongoose = require("mongoose"); // importing the mongoose package
require("dotenv").config();

const category = process.env.URL1; // initializing the url
const vendor =
	"mongodb+srv://visdas:mFkgT780NygeinS7@cluster0.bvlifu1.mongodb.net/vendor?retryWrites=true&w=majority"; // initializing the url

console.log({ vendor });

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
		console.log("connection error:", error);
	});
