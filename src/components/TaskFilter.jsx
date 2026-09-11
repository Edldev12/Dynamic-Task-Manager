function TaskFilter({ filter, onFilterChange }) {
  return (
    <div className="task-filters">
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => onFilterChange("all")}
      >
        All
      </button>

      <button
        className={filter === "completed" ? "active" : ""}
        onClick={() => onFilterChange("completed")}
      >
        Completed
      </button>

      <button
        className={filter === "notCompleted" ? "active" : ""}
        onClick={() => onFilterChange("notCompleted")}
      >
        Not Completed
      </button>
    </div>
  );
}

export default TaskFilter;