import { useState } from "react";
import "./App.css";

function App() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (taskText.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: taskText.trim(),
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>

      <div className="task-input">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter a task"
        />

        <button onClick={addTask}>Add</button>
      </div>

      {/* Task List */}
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;