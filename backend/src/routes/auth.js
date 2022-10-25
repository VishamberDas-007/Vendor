const express = require("express"); // importing the express package
const routes = express.Router(); // initializing routes
const { register } = require("../controllers/auth"); // importing the register from the controller
const { login } = require("../controllers/auth"); // importing the login from the controller

// post request for the registeration of the vendor
routes.post("/register", async (req, res) => {
	let result = await register(req);
	return res.status(result.status).json(result);
});

// get request for the registeration of the vendor
routes.get("/login", async (req, res) => {
	let result = await login(req);
	return res.status(result.status).json(result);
});

// exporting the routes
module.exports = routes;
