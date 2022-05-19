const { Task } = require('../models');

const create = async (task) => {
  const addTask = await Task.create(task);

  return addTask;
}

const findAll = async () => {
  const tasks = await Task.findAll();

  return tasks;
}

module.exports = { create, findAll };
