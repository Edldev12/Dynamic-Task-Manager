import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskText.trim() === "") {
      return;
    }

    onAddTask(taskText.trim());
    setTaskText("");
  };

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a task..."
      />

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;