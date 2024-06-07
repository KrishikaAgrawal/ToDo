import React from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const App = () => {
  return (
    <div>
      <h1>To-Do List</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
