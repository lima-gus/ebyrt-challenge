const express = require('express');

const taskController = require('../controllers/taskController');

const taskRouter = express.Router();

taskRouter.post('/task', taskController.create);
taskRouter.get('/task', taskController.findAll);

module.exports = taskRouter;
