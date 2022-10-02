const mongoose = require("mongoose"); // importing the mongoose package

const url =
	"mongodb+srv://visdas:mFkgT780NygeinS7@cluster0.bvlifu1.mongodb.net/vendor?retryWrites=true&w=majority"; // initializing the url

// connecting to the mongoose db
mongoose
	.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Database connected:", url);
	})
	.catch((error) => {
		console.log("connection error:", err);
	});
