import { useTodo } from "../../context/TodoContext";

export default function ProjectItem({ project, count, isDeleteAllowed }) {
  const { state, dispatch } = useTodo();
  const isActive = state.activeProjectId === project.id;

  const handleSelect = () => {
    dispatch({ type: "SET_ACTIVE_PROJECT", payload: project.id });
  };

  const handleDelete = (e) => {
    e.stopPropagation(); 
    dispatch({ type: "DELETE_PROJECT", payload: project.id });
  };

  return (
    <div
      onClick={handleSelect}
      className={`project-item ${isActive ? "active" : ""}`}
      style={{
        display: "flex",
        justify: "space-between",
        alignItems: "center",
        padding: "0.5rem 1rem",
        cursor: "pointer",
        backgroundColor: isActive ? "#e2e8f0" : "transparent",
        borderRadius: "4px",
        marginBottom: "0.25rem"
      }}
    >
      <span className="project-name">{project.name}</span>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <span
          className="project-badge"
          style={{
            background: "#cbd5e1",
            borderRadius: "12px",
            padding: "0.1rem 0.5rem",
            fontSize: "0.8rem"
          }}
        >
          {count}
        </span>
        {isDeleteAllowed && (
          <button
            onClick={handleDelete}
            style={{
              background: "none",
              border: "none",
              color: "#ef4444",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}