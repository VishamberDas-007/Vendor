const response = require("../responses/response"); // requiring the response
const { Detail } = require("../models/register"); //requiring the Detail named collection from the model

exports.register = async (req) => {
	try {
		// creating an instance for adding the vendor details
		const vendorDetails = new Detail({
			name: req.body.name,
			email: req.body.email,
			contactNo: req.body.contactNo,
			password: req.body.password,
		});

		// saving the details into the collection
		const result = await vendorDetails.save();
		console.log(result);

		// returning the response
		return response.successResponse("Data added successfully", vendorDetails);
	} catch (error) {
		// returning the error if any
		return response.errorResponse(
			"Error occurred while inserting the details",
			error
		);
	}
};
