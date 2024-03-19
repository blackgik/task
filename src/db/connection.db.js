import mongoose from "mongoose";

const url = process.env.LIVE_URI;

mongoose.set("strictQuery", false);
mongoose
	.connect(
		url,

		{ autoIndex: false }
	)
	.then(() => {
		console.log("database dey very functional🔥");
	})
	.catch((e) => {
		console.log("Database Crash😭", e);
	});
