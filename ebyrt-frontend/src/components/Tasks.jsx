import React from 'react';
import '../styles/tasks.css';

function Tasks() {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tarefa 1</td>
            <td>Em andamento</td>
          </tr>
          <tr>
            <td>Tarefa 2</td>
            <td>Concluída</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Tasks;
