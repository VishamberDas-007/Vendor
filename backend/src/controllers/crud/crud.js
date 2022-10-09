const response = require("../../responses/response"); // requiring the response
const { Detail } = require("../../models/crud"); //requiring the category named collection from the model
const { ObjectID } = require("bson");

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

		if (!ObjectID.isValid(id)) {
			return response.errorResponse("Object id is invalid", id);
		}

		const findCategory = await Detail.findOne({ id: id });
		console.log({ findCategory });
		if (!findCategory) {
			return response.notFound("No such category found");
		}
		const deleteCategory = await Detail.deleteOne({ id: id });
		return response.successResponse(
			"Category deleted successfully",
			findCategory
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
		const id = req.params.id;
		console.log({ id });
		var result;
		if (id) {
			result = await Detail.findOne({ id: id });
			// console.log(result);
			if (!result) {
				return response.notFound("No such category found!!");
			}
		} else {
			// searching the details from the collection
			result = await Detail.find();
			// console.log(result);
			if (result.length == 0) {
				return response.notFound("No category found!!");
			}
		}

		// returning the response
		return response.successResponse("Data found successfully", result);
	} catch (error) {
		console.log({ error });
		// returning the error if any
		return response.errorResponse(
			"Error occurred while listing the details from category",
			error
		);
	}
};

// updating the category
exports.update = async (req) => {
	try {
		const id = req.params.id;
		const name = req.body.name;
		var result;

		// if name not entered
		if (!name) {
			return response.notFound("Please enter the name");
		}

		// Checking if the categoy already present
		result = await Detail.findOne({ id: id });
		// console.log({ result });
		if (!result) {
			return response.notFound("No such category present");
		}

		// finding the category if already present
		result = await Detail.find({ id: { $ne: id } });
		console.log("Found the result" + result);
		// if (result) {
		// 	return response.notFound("Category is already present");
		// }

		// updating the details
		const updateDetails = await Detail.findOneAndUpdate(
			{ id: id },
			{
				name: name,
			}
		);

		// returning the response
		return response.successResponse("Category updated successfully", { name });
	} catch (error) {
		// returning the error response
		return response.errorResponse(
			"Error occurred while updating the category",
			error
		);
	}
};
