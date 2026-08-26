import { useTodo } from "./context/TodoContext";

export default function App() {
  const { state, activeProject, projectCounts, dispatch } = useTodo();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Active Project: {activeProject?.name}</h1>
      <p>Total Projects: {state.projects.length}</p>
      <p>Total Todos: {state.todos.length}</p>
      <p>Todos in Active Project: {projectCounts[state.activeProjectId] || 0}</p>
      
      <button
        onClick={() =>
          dispatch({
            type: "ADD_TODO",
            payload: { title: "New Todo via Context!" }
          })
        }
      >
        Add Test Todo
      </button>
    </div>
  );
}