const response = require("../responses/response");
const { Register } = require("../models/register");

exports.register = async (req) => {
	try {
		console.log("Controller is working");

		const vendorDetails = new Register({
			name: req.body.name,
			email: req.body.email,
			contactNo: req.body.contactNo,
			password: req.body.password,
		});
		if (!req.body.name) {
			return response.notFound("Name not found");
		}
		const result = await vendorDetails.save();
		console.log(result);
		return response.successResponse("Data added successfully", result);
	} catch (error) {
		return response.errorResponse(
			"Error occurred while inserting the details",
			error
		);
	}
};
