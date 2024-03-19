import { createNewTask, fetchAllTask, fetchOneTask } from "../services/task.service.js";

export const createNewTaskhandler = async (req, res) => {
	const { body } = req;

	const response = await createNewTask({ body });

	res.send({
		success: true,
		message: "Created task successfully",
		data: response
	});
};

export const fetchAllTaskHandler = async (req, res) => {
	const { query } = req;

	const response = await fetchAllTask({ param: query });

	res.send({
		success: true,
		message: "Fetched tasks successfully",
		data: response
	});
};

export const fetchOneTaskHandler = async (req, res) => {
	const { id } = req.params;

	const response = await fetchOneTask({ id });

	res.send({
		success: true,
		message: "Fetched task successfully",
		data: response
	});
};
