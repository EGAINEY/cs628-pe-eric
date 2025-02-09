import React from "react";
import "./index.css";

// TodoTask component for a single task item in the TodoList.
const TodoTask = ({ task, taskNumber, onDelete }) => {
  return (
    <div className="task-container">
      {/* Display the task number and task information. */}
      <span><strong>Task {taskNumber}:</strong> {task}</span>
      {/* Button to delete the specified task with the onClick event handler. */}
      <button className="delete-button" onClick={onDelete}>Delete</button>
    </div>
  );
};

// Export the component.
export default TodoTask;