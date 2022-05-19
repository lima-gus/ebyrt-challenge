const Task = (sequelize, DataTypes) => {
  const task = sequelize.define('Task', {
    task: DataTypes.STRING,
  }, {
    tableName: 'Tasks',
    timestamps: false,
  });

  return task;
};

module.exports = Task;
