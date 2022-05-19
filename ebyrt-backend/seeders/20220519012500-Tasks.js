module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Tasks', [{
      id: 1,
      task: 'Tarefa 1',
     },
    {
      id: 2,
      task: 'Tarefa 2',
    },
    {
      id: 3,
      task: 'Tarefa 3',
    }], { timestamps: false });
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Tasks', null, {});
  },
};
