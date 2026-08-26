import { useTodo } from "../../context/TodoContext";
import ProjectItem from "./ProjectItem";

export default function ProjectList() {
  const { state, projectCounts } = useTodo();
  const isDeleteAllowed = state.projects.length > 1;

  return (
    <div className="project-list">
      {state.projects.map((project) => (
        <ProjectItem
          key={project.id}
          project={project}
          count={projectCounts[project.id] || 0}
          isDeleteAllowed={isDeleteAllowed}
        />
      ))}
    </div>
  );
}