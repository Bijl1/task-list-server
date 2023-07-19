const express = require("express");
const router = express.Router();
const TaskList = require("../../models/TaskList.model");

// CREATE
router.post("/", (req, res) => {
	TaskList.create(req.body)
		.then((taskList) => {
			res.json({ success: true, taskList });
		})
		.catch((err) => {
			res.json({ success: false, error: err });
		});
});

// READ
router.get("/", (req, res) => {
	TaskList.find()
		.populate("tasks")
		.then((taskLists) => {
			res.json({ success: true, taskLists });
		})
		.catch((err) => {
			res.json({ success: false, error: err });
		});
});

// READ
router.get("/:taskListId", (req, res) => {
	TaskList.findById(req.params.taskListId)
		.then((taskList) => {
			res.json({ success: true, taskList });
		})
		.catch((err) => {
			res.json({ success: false, error: err });
		});
});

// UPDATE
router.put("/:taskListId", (req, res) => {
	TaskList.findByIdAndUpdate(req.params.taskListId, req.body, { new: true })
		.then((taskList) => {
			res.json({ success: true, taskList });
		})
		.catch((err) => {
			res.json({ success: false, error: err });
		});
});

// DELETE
router.delete("/:taskListId", (req, res) => {
	TaskList.findByIdAndRemove(req.params.taskListId)
		.then(() => {
			res.json({ success: true, message: "Successfully removed task" });
		})
		.catch((err) => {
			res.json({ success: false, error: err });
		});
});
module.exports = router;
