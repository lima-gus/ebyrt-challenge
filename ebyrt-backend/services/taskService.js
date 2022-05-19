const { Task } = require('../models');

const create = async (task) => {
  const addTask = await Task.create(task);

  return addTask;
}

module.exports = { create };
