const response = require("../../responses/response"); // requiring the response
const { Detail } = require("../../models/crud"); //requiring the category named collection from the model

// inserting the details into the category
exports.insert = async (req) => {
	try {
		// creating an instance for adding the vendor details
		const categoryDetails = new Detail({
			name: req.body.name,
		});

		// saving the details into the collection
		const result = await categoryDetails.save();
		console.log(result);

		// returning the response
		return response.successResponse("Data added successfully", categoryDetails);
	} catch (error) {
		console.log({ error });
		// returning the error if any
		return response.errorResponse(
			"Error occurred while inserting the details into category",
			error
		);
	}
};

// deleting the details from category
exports.deleting = async (req) => {
	try {
		// requesting the id to be deleted
		const id = req.params.id;
		const deleteCategory = await Detail.deleteOne({ id: id }, (err) => {
			if (err) console.log(err);
		});
		if (!deleteCategory) {
			return response.notFound("No such category found");
		}
		return response.successResponse(
			"Category deleted successfully",
			deleteCategory
		);
	} catch (error) {
		console.log({ error });
		return response.errorResponse(
			"Error occurred while deleting the details from category",
			error
		);
	}
};

// listing the details from the category
exports.listing = async (req) => {
	try {
		// searching the details from the collection
		const result = await Detail.find();
		console.log(result);

		// returning the response
		return response.successResponse("Data added successfully", result);
	} catch (error) {
		console.log({ error });
		// returning the error if any
		return response.errorResponse(
			"Error occurred while listing the details from category",
			error
		);
	}
};
