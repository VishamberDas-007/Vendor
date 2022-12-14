const mongoose = require("mongoose");

// defining the schema

const vendorDetails = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	contactNo: {
		type: Number,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

// collection creation
const Detail = new mongoose.model("Detail", vendorDetails);
// console.log({ Detail });
module.exports = { Detail };
