import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task._id} task={task} deleteTask={deleteTask} toggleComplete={toggleComplete} />
      ))}
    </ul>
  );
};

export default TaskList;