import { useState } from "react";
import { useTodo } from "../../context/TodoContext";
import ProjectList from "../project/ProjectList";

export default function Sidebar() {
  const [newProjectName, setNewProjectName] = useState("");
  const { dispatch } = useTodo();

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!newProjectName.trim()) return;

    dispatch({ type: "ADD_PROJECT", payload: newProjectName.trim() });
    setNewProjectName("");
  };

  return (
    <aside
      className="sidebar"
      style={{
        width: "250px",
        borderRight: "1px solid #e2e8f0",
        paddingRight: "1rem"
      }}
    >
      <h3>Projects</h3>
      <ProjectList />
      <form onSubmit={handleAddProject} style={{ marginTop: "1rem" }}>
        <input
          type="text"
          placeholder="New project name..."
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
          style={{ width: "100%", padding: "0.4rem", marginBottom: "0.5rem" }}
        />
        <button type="submit" style={{ width: "100%", padding: "0.4rem" }}>
          + Add Project
        </button>
      </form>
    </aside>
  );
}