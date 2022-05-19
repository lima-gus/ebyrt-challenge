const { Task } = require('../models');

const create = async (task) => {
  const { dataValues } = await Task.create(task);

  return dataValues;
}

const findAll = async () => {
  const tasks = await Task.findAll();

  return tasks;
}

module.exports = { create, findAll };
