const express = require("express");
const router = express.Router();
const Task = require("../../models/Task.model");

// CREATE
router.post("/", (req, res) => {
	Task.create(req.body)
		.then((task) => {
			res.json({ success: true, task });
		})
		.catch((err) => {
			res.json({ success: false, error: err });
		});
});

// READ
router.get("/", (req, res) => {
	Task.find()
		.then((tasks) => {
			res.json({ success: true, tasks });
		})
		.catch((err) => {
			res.json({ success: false, error: err });
		});
});

// READ
router.get("/:taskId", (req, res) => {
	Task.findById(req.params.taskId)
		.then((task) => {
			res.json({ success: true, task });
		})
		.catch((err) => {
			res.json({ success: false, error: err });
		});
});

// UPDATE
router.put("/:taskId", (req, res) => {
	Task.findByIdAndUpdate(req.params.taskId, req.body, { new: true })
		.then((task) => {
			res.json({ success: true, task });
		})
		.catch((err) => {
			res.json({ success: false, error: err });
		});
});

// DELETE
router.delete("/:taskId", (req, res) => {
	Task.findByIdAndRemove(req.params.taskId)
		.then(() => {
			res.json({ success: true, message: "Successfully removed task" });
		})
		.catch((err) => {
			res.json({ success: false, error: err });
		});
});
module.exports = router;
