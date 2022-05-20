const taskService = require('../services/taskService');

const create = async (req, res, next) => {
  try {
    const { task } = req.body;
    const addTask = await taskService.create({ task });

    return res.status(201).json(addTask);
  } catch (e) {
    next(e);
  }
};

const findAll = async (_req, res, next) => {
  try {
    const tasks = await taskService.findAll();

    return res.status(200).json(tasks);
  } catch (e) {
    next(e);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    await taskService.remove(id);

    return res.status(204).json({ id });
  } catch (e) {
    next(e);
  }
}

module.exports = { create, findAll, remove };
