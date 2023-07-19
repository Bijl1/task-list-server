const { Schema, model } = require("mongoose");

const taskSchema = new Schema(
	{
		task: String,
		description: String,
		isComplete: Boolean,
		completeBy: Date,
	},
	{
		// this second object adds extra properties: `createdAt` and `updatedAt`
		timestamps: true,
	}
);

const Task = model("Task", taskSchema);

module.exports = Task;
