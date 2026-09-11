import { useState } from "react";
import './App.css';
function TodoApp() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    // Don't add empty tasks
    if (taskText.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: taskText.trim(),
      completed: false
    };

    setTasks([...tasks, newTask]);

    // Clear input
    setTaskText("");
  };

  return (
    <div>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={addTask}>
        Add
      </button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;