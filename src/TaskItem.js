import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTask, editTask } from "./tasksSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.text);

  const handleEditTask = () => {
    if (isEditing && editedTask.trim()) {
      dispatch(editTask({ id: task.id, text: editedTask }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
        />
      ) : (
        <span
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
          onClick={() => dispatch(toggleTask(task.id))}
        >
          {task.text}
        </span>
      )}
      <button onClick={handleEditTask}>{isEditing ? "Save" : "Edit"}</button>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
};

export default TaskItem;
