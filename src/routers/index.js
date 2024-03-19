import taskRoute from "./task.js";

export default (router) => {
	router.use("/task", taskRoute);

	return router;
};
