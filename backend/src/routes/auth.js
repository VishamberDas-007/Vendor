const express = require("express"); // importing the express package
const routes = express.Router(); // initializing routes
const { register } = require("../controllers/auth"); // importing the register from the controller

// post request for the registeration of the vendor
routes.post("/register", async (req, res) => {
	let result = await register(req);
	return res.status(result.status).json(result);
});

// exporting the routes
module.exports = routes;
