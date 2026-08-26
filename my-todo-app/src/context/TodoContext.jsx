import { createContext, useContext, useReducer } from "react";
import { todoReducer, INITIAL_STATE } from "./todoreducer";
import { useLocalStorage, getStorageValue } from "../hooks/useLocalStorage";

const TodoContext = createContext(null);
const STORAGE_KEY = "my_todo_app_data";

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(
    todoReducer,
     INITIAL_STATE,
    (defaultState) => getStorageValue(STORAGE_KEY, defaultState)
  );

  useLocalStorage(STORAGE_KEY, state);
  
  const activeProject =
    state.projects.find((p) => p.id === state.activeProjectId) || null;

  const projectCounts = state.projects.reduce((acc, project) => {
    acc[project.id] = state.todos.filter(
      (todo) => todo.projectId === project.id
    ).length;
    return acc;
  }, {});

  const value = {
    state,
    dispatch,
    activeProject,
    projectCounts
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export function useTodo() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
}