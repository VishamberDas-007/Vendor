const mongoose = require("mongoose");
const { connected } = require("process");

const category = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
});

// creating the collection

const Detail = new mongoose.model("List", category);

module.exports = { Detail };
