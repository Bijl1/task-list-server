const express = require("express");
const router = express.Router();
const Task = require('../../models/Task.model');

// CREATE
router.post("/", (req, res) => {
  Task.create(req.body)
    .then(task => {
      res.json({ success: true, task }); // Send the created task as a JSON response
    })
    .catch(error => {
      res.json({ success: false, error }); // Send an error JSON response
    });
});

// READ ALL
router.get("/", (req, res) => {
  Task.find()
    .populate('tasks')
    .then(tasks => {
      res.json({ success: true, tasks }); // Send the tasks as a JSON response
    })
    .catch(error => {
      res.json({ success: false, error }); // Send an error JSON response
    });
});

// READ BY ID
router.get("/:taskId", (req, res) => {
  Task.findById(req.params.taskId)
    .then(task => {
      res.json({ success: true, task }); // Send the task as a JSON response
    })
    .catch(error => {
      res.json({ success: false, error }); // Send an error JSON response
    });
});

// UPDATE BY ID
router.put("/:taskId", (req, res) => {
  Task.findByIdAndUpdate(req.params.taskId, req.body, { new: true })
    .then(task => {
      res.json({ success: true, task }); // Send the updated task as a JSON response
    })
    .catch(error => {
      res.json({ success: false, error }); // Send an error JSON response
    });
});

// DELETE BY ID
router.delete("/:taskId", (req, res) => {
  Task.findByIdAndRemove(req.params.taskId)
    .then(() => {
      res.json({ success: true, message: 'Successfully removed task' }); // Send a success message as a JSON response
    })
    .catch(error => {
      res.json({ success: false, error }); // Send an error JSON response
    });
});

module.exports = router;
