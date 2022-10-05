const express = require("express");
const expressApp = express();
require("dotenv").config();
require("./src/db/conn");
const cors = require("cors");
const bodyParser = require("body-parser"); // importing body-parser package
expressApp.use(bodyParser.json()); // parses the json format
expressApp.use(bodyParser.urlencoded({ extended: true })); // enhances to get the urlencoded

// initializing the port number
const port = process.env.PORT || 3000;

// using cors for the sharing the resources on cross-platform
expressApp.use(
	cors({
		origin: "*",
	})
);

// importing the vendor auth routes
// expressApp.use("/vendor", require("./src/routes/auth"));

// importing the category crud routes
expressApp.use("/category", require("./src/routes/crud"));

expressApp.listen(port, () => {
	console.log(`Server is running at port ${port}`);
});

// !!!!!!!!!!!!!!!!!!!!!!!.................................................!!!!!!!!!!!!!!!!!!!!!!!!

// connecting to the mongodb in single index file

// const mongoose = require("mongoose");
// const url = "mongodb://127.0.0.1:27017/vendor";
// mongoose.connect(url, {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.once("open", (_) => {
// 	console.log("Database connected:", url);
// });

// db.on("error", (err) => {
// 	console.error("connection error:", err);
// });

// // defining the schema

// const vendorDetails = new mongoose.Schema({
// 	name: {
// 		type: String,
// 		required: true,
// 	},
// 	email: {
// 		type: String,
// 		required: true,
// 	},
// 	contactNo: {
// 		type: Number,
// 		required: true,
// 	},
// });

// // collection creation
// const Vendor = new mongoose.model("Detail", vendorDetails);

// // creating the document

// const createDocument = async () => {
// 	try {
// 		const insertVendorDetails = new Vendor({
// 			name: "Vishamber",
// 			email: "vishdas111@gmail.com",
// 			contactNo: 6354992643,
// 		});
// 		const result = await insertVendorDetails.save();
// 		console.log(result);
// 	} catch (err) {
// 		console.log(err);
// 	}
// };

// createDocument();
