const taskModel = require('../models/taskModel');

const create = async (task) => {
  const addTask = await taskModel.create(task);

  return addTask;
};

module.exports = { create };
