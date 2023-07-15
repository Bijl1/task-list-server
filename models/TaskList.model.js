const { Schema, model } = require("mongoose");

const taskListSchema = new Schema(
  {
    title: String,
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Task'}]
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const TaskList = model("TaskList", taskListSchema);

module.exports = TaskList;
