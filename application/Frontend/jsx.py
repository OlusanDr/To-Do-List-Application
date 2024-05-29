// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get('/api/tasks');
    setTasks(response.data);
  };

  const addTask = async () => {
    const response = await axios.post('/api/tasks', { name: newTask });
    setTasks([...tasks, response.data]);
    setNewTask('');
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
