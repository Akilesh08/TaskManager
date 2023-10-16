
import React,{useState} from 'react';
import './App.css';
import Task from './Components/Task';
import TaskList from './Components/TaskList';
import AddForm from './Components/AddForm';
import UpdateTask from './Components/UpdateTask';
function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const addTask = (task) => {
  setTasks([...tasks, task]);
  };
  const removeTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
  
  };
  const selectTask = (task) => {
  setSelectedTask(task);
  };
  const updateTask = (id, updatedTask) => {
  setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  setSelectedTask(null);
  };
  return (
  <div className='App'>
  <h1>Task Manager</h1>
  <TaskList tasks={tasks} removeTask={removeTask} selectTask={selectTask} />
  <AddForm addTask={addTask} />
  {selectedTask && (
  <UpdateTask
  selectedTask={selectedTask}
  updateTask={updateTask}
  setSelectedTask={setSelectedTask}
  />
  )}
  </div>
  );
  }

export default App;
