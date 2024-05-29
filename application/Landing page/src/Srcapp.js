import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:5000/api/tasks');
    setTasks(response.data);
  };

  const addTask = async (taskName) => {
    const response = await axios.post('http://localhost:5000/api/tasks', { name: taskName });
    setTasks([...tasks, response.data]);
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    setTasks(tasks.filter(task => task._id !== id));
  };

  const toggleComplete = async (id) => {
    const task = tasks.find(task => task._id === id);
    const response = await axios.put(`http://localhost:5000/api/tasks/${id}`, { completed: !task.completed });
    setTasks(tasks.map(task => (task._id === id ? response.data : task)));
  };

  return (
    <div>
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;