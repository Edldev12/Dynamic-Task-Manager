import { useState } from "react";
import "./App.css";

function App() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    }

    if (filter === "notCompleted") {
      return !task.completed;
    }

    return true;
  });

  // Complete / Uncomplete
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };

  // Add task
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
  const clearCompleted = () => {
    setTasks(
      tasks.filter((task) => !task.completed)
    );
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>

      {/* Add Task */}
      <div className="task-input">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter a task"
        />

        <button onClick={addTask}>Add</button>
      </div>
      {/* Task Filters */}
      <div className="task-filters">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>

        <button
          className={filter === "notCompleted" ? "active" : ""}
          onClick={() => setFilter("notCompleted")}
        >
          Not Completed
        </button>
      </div>
      {/* Task Statistics */}
      <div className="task-stats">
        <div className="stat">
          <span>Total Tasks</span>
          <strong>{tasks.length}</strong>
        </div>

        <div className="stat">
          <span>Completed Tasks</span>
          <strong>
            {tasks.filter((task) => task.completed).length}
          </strong>
        </div>
      </div>

      {/* Empty State */}
      {tasks.length === 0 ? (
        <p className="empty-message">
          No tasks yet. Add your first task.
        </p>
      ) : (
        <ul className="task-list">
          {filteredTasks.map((task) => (
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
      <button
        className="clear-completed-button"
        onClick={clearCompleted}
      >
        Clear Completed
      </button>
    </div>

  );
}

export default App;