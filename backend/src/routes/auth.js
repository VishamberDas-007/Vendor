const express = require("express");
const routes = express.Router();
const { register } = require("../controllers/auth");

routes.post("/register", async (req, res) => {
	let result = await register(req);
	return res.status(result.status).json(result);
});

module.exports = routes;
