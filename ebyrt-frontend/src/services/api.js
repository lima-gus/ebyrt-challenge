export const getAllTasks = async () => {
  const tasks = await fetch('http://localhost:3001/task');
  const res = await tasks.json();
  return res;
};
