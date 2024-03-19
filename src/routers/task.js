import { Router } from "express";
import {
	createNewTaskhandler,
	fetchAllTaskHandler,
	fetchOneTaskHandler
} from "../controllers/task.controller.js";

const taskRoute = Router();

taskRoute.post("/create-new-task", createNewTaskhandler);
taskRoute.get("/fetch-all-tasks", fetchAllTaskHandler);
taskRoute.get("/fetch-one-tasks/:id", fetchOneTaskHandler);

export default taskRoute;
