import { useState } from "react";
import "./App.css";

function App() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };

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

      {/* Empty State / Task List */}
      {tasks.length === 0 ? (
        <p className="empty-message">
          No tasks yet. Add your first task.
        </p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={task.completed ? "completed" : ""}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />

              <span>{task.text}</span>

              <button
                className="delete-button"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;