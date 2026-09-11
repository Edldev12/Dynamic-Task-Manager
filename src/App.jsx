import { useState } from "react";

import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // Add task
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  // Toggle task
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
            ...task,
            completed: !task.completed,
          }
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

  // Clear completed tasks
  const clearCompleted = () => {
    setTasks(
      tasks.filter((task) => !task.completed)
    );
  };

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

  // Statistics
  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="todo-app">

      <h1>Dynamic Task Manager</h1>

      {/* Task Form */}
      <TaskForm onAddTask={addTask} />

      {/* Filter */}
      <TaskFilter
        filter={filter}
        onFilterChange={setFilter}
      />

      {/* Statistics */}
      <div className="task-stats">

        <div className="stat">
          <span>Total Tasks</span>
          <strong>{tasks.length}</strong>
        </div>

        <div className="stat">
          <span>Completed Tasks</span>
          <strong>{completedTasks}</strong>
        </div>

      </div>

      {/* Clear Completed */}
      <button
        className="clear-completed-button"
        onClick={clearCompleted}
      >
        Clear Completed
      </button>

      {/* Empty State */}
      {tasks.length === 0 ? (
        <p className="empty-message">
          No tasks yet. Add your first task.
        </p>
      ) : (
        <TaskList
          tasks={filteredTasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      )}

    </div>
  );
}

export default App;