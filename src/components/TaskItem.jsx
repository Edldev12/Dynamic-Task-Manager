function TaskItem({
  task,
  onToggleTask,
  onDeleteTask
}) {
  return (
    <li
      className={`task-item ${task.completed ? "completed" : ""
        }`}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
      />

      <span>{task.text}</span>

      <button
        className="delete-button"
        onClick={() => onDeleteTask(task.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;