const connection = require('./connection');

const create = async (task) => {
  const [result] = await connection
    .execute('INSERT INTO ebyrt.tasks (task) VALUES (?);',
  [task]);

  return { id: result.insertId, task };
};

module.exports = { create };
