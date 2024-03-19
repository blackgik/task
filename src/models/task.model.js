import { Schema, model } from "mongoose";

const TaskSchema = new Schema(
	{
		name: { type: String, required: true, lowercase: true },
		has_completed: { type: Boolean, required: false, default: false }
	},
	{ timestamps: true }
);

export default model("Task", TaskSchema);
