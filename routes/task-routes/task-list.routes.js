const express = require("express");
const router = express.Router();
const TaskList = require('../../models/TaskList.model');

// CREATE
router.post("/", (req, res) => {
  TaskList.create(req.body)
    .then(taskList => {
      res.json({ success: true, taskList }); // Send the created task list as a JSON response
    })
    .catch(error => {
      res.json({ success: false, error }); // Send an error JSON response
    });
});

// GET ALL
router.get("/", (req, res) => {
  TaskList.find()
    .populate('tasks')
    .then(taskLists => {
      res.json({ success: true, taskLists }); // Send the task lists as a JSON response
    })
    .catch(error => {
      res.json({ success: false, error }); // Send an error JSON response
    });
});

// GET BY ID
router.get("/:taskListId", (req, res) => {
  TaskList.findById(req.params.taskListId)
    .then(taskList => {
      res.json({ success: true, taskList }); // Send the task list as a JSON response
    })
    .catch(error => {
      res.json({ success: false, error }); // Send an error JSON response
    });
});

// UPDATE BY ID
router.put("/:taskListId", (req, res) => {
  TaskList.findByIdAndUpdate(req.params.taskListId, req.body, { new: true })
    .then(taskList => {
      res.json({ success: true, taskList }); // Send the updated task list as a JSON response
    })
    .catch(error => {
      res.json({ success: false, error }); // Send an error JSON response
    });
});

// DELETE BY ID
router.delete("/:taskListId", (req, res) => {
  TaskList.findByIdAndRemove(req.params.taskListId)
    .then(() => {
      res.json({ success: true, message: 'Successfully removed task list' }); // Send a success message as a JSON response
    })
    .catch(error => {
      res.json({ success: false, error }); // Send an error JSON response
    });
});

module.exports = router;
