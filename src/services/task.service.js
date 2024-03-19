import taskModel from "../models/task.model.js";

export const createNewTask = async ({ body }) => {
	// Check if this task already exist
	// save the task
	// Check for database errors
	try {
		const doesTaskExist = await taskModel.findOne({ name: body.name });

		if (doesTaskExist) throw new Error("Duplicate task");

		const createTask = await taskModel.create({ ...body });

		return createTask;
	} catch (err) {
		console.log(err);
	}
};

export const fetchAllTask = async ({ param }) => {
	let { pageNo, noOfRequests, search } = param;

	pageNo = parseInt(pageNo, 10) || 1;
	noOfRequests = parseInt(noOfRequests, 10) || 2;

	const queryx = typeof search !== "undefined" ? search : false;
	const rgx = (pattern) => new RegExp(`.*${pattern}.*`, "i");
	const searchRgx = rgx(queryx);

	const filter = {};

	if (queryx) {
		filter["$or"] = [{ name: searchRgx }];
	}

	const count = await taskModel.countDocuments(filter);
	const fetchedData = await taskModel
		.find(filter)
		.sort({ createdAt: -1 })
		.skip((pageNo - 1) * noOfRequests)
		.limit(noOfRequests);

	const availablePages = Math.ceil(count / noOfRequests);

	return {
		pageNo,
		availablePages,
		count,
		fetchedData
	};
};

export const fetchOneTask = async ({ id }) => {
	const task = await taskModel.findById(id);

	if (!task) throw new Error("task not found");

	return task;
};
