const express = require("express");
const routes = express.Router();
const { insert } = require("../controllers/crud/crud");
const { deleting } = require("../controllers/crud/crud");
const { listing } = require("../controllers/crud/crud");
const { update } = require("../controllers/crud/crud");

// post to insert the category
routes.post("/insert", async (req, res) => {
	let result = await insert(req);
	return res.status(result.status).json(result);
});

// delete to delete the category
routes.delete("/delete/:id", async (req, res) => {
	let result = await deleting(req);
	return res.status(result.status).json(result);
});

// list to list the category details
routes.get("/listing", async (req, res) => {
	let result = await listing(req);
	return res.status(result.status).json(result);
});

// edit to list the particular category detail
routes.get("/edit/:id", async (req, res) => {
	let result = await listing(req);
	return res.status(result.status).json(result);
});

// update the category
routes.put("/update/:id", async (req, res) => {
	let result = await update(req);
	return res.status(result.status).json(result);
});

module.exports = routes;
