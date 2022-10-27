const response = require("../responses/response"); // requiring the response
const { Detail } = require("../models/register"); //requiring the Detail named collection from the model
require("dotenv").config();
const jwt = require("jsonwebtoken"); // requiring json web token
const bcrypt = require("bcrypt"); // requiring bcrypt

// for registering the details of vendor
exports.register = async (req) => {
	try {
		// creating an instance for adding the vendor details
		const vendorDetails = new Detail({
			name: req.body.fname,
			email: req.body.email,
			contactNo: req.body.mono,
			password: req.body.password,
		});
		const hashedPassword = bcrypt.hashSync(vendorDetails.password, 7); // hashing the password
		console.log({ hashedPassword });
		vendorDetails.password = hashedPassword;
		// saving the details into the collection
		const result = await vendorDetails.save();
		console.log(result);

		// returning the response
		return response.successResponse("Data added successfully", vendorDetails);
	} catch (error) {
		console.log({ error });
		// returning the error if any
		return response.errorResponse(
			"Error occurred while inserting the details",
			error
		);
	}
};

// for logging in
exports.login = async (req) => {
	try {
		// req for the entered credentials
		const credentials = {
			email: req.body.email,
			password: req.body.password,
		};

		// check if the cuurent credentials exist
		const emailExist = await Detail.findOne({
			email: credentials.email,
		});
		console.log({ emailExist });
		// if email does not exist
		if (!emailExist) {
			return response.notFound("Not found");
		}
		// else email exists
		else {
			const credentialExists = await Detail.findOne({
				email: credentials.email,
				password: credentials.password,
			});

			// if the credential is not found
			if (!credentialExists) {
				return response.notFound("Invalid credentials");
			}

			// signimg a token
			let token = jwt.sign({ credentialExists }, process.env.SECRET_KEY);

			// returning the response
			return response.successResponse("Login successfull", { token });
		}
	} catch (error) {
		console.log({ error });
		// returning the error resposne
		return response.errorResponse("Error occurred while logging in", error);
	}
};
