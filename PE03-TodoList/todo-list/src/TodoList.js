import React, { useState } from "react";
import TodoTask from "./TodoTask";
import "./index.css";

// TodoList component for all tasks.
const TodoList = () => {
  // Stores existing tasks in the state.
  const [todos, setTodos] = useState([]);
  // Stores new task in the state.
  const [newTask, setNewTask] = useState("");

  // Function that creates and adds the new task to the state.
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTodos([...todos, newTask]);
      setNewTask("");
    }
  };

  // Function that deletes a specified task.
  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h2>ToDo List App</h2>
      <div className="task-input-container">
        {/* Input field captures the user input using the onChange event handler. Updates state using the setNewTask. */}
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Enter a task" className="task-input-field" />
        {/* Add task button calls the addTask function using the onClick event handler. Updates state using the setTodos tasks list.*/}
        <button className="add-button" onClick={addTask}>Add Task</button>
      </div>
      <div>
        {/* Maps over each task to dynamically render the list. Passes onDelete as a prop to TodoTask.js */}
        {todos.map((task, index) => (
          <TodoTask key={index} task={task} taskNumber={index + 1} onDelete={() => deleteTask(index)} />
        ))}
      </div>
    </div>
  );
};

// Export the component.
export default TodoList;