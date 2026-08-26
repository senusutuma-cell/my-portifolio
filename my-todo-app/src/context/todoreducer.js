export const INITIAL_STATE = {
  activeProjectId: "proj-1",
  projects: [
    { id: "proj-1", name: "Personal" }
  ],
  todos: [
    {
      id: "todo-1",
      projectId: "proj-1",
      title: "Welcome to your Todo App!",
      description: "This is a sample task to get you started.",
      dueDate: new Date().toISOString().split("T")[0],
      priority: "Medium",
      status: "todo",
      createdAt: new Date().toISOString()
    }
  ]
};

export function todoReducer(state, action) {
  switch (action.type) {
    case "SET_ACTIVE_PROJECT":
      return {
        ...state,
        activeProjectId: action.payload
      };

    case "ADD_PROJECT": {
      const newProject = {
        id: `proj-${Date.now()}`,
        name: action.payload
      };
      return {
        ...state,
        projects: [...state.projects, newProject],
        activeProjectId: newProject.id
      };
    }

    case "DELETE_PROJECT": {
      const projectIdToDelete = action.payload;
      const remainingProjects = state.projects.filter((p) => p.id !== projectIdToDelete);
      const remainingTodos = state.todos.filter((t) => t.projectId !== projectIdToDelete);
      
      
      const nextActiveId =
        state.activeProjectId === projectIdToDelete
          ? remainingProjects[0]?.id || null
          : state.activeProjectId;

      return {
        ...state,
        projects: remainingProjects,
        todos: remainingTodos,
        activeProjectId: nextActiveId
      };
    }

    case "ADD_TODO": {
      const newTodo = {
        id: `todo-${Date.now()}`,
        projectId: action.payload.projectId || state.activeProjectId,
        createdAt: new Date().toISOString(),
        status: "todo",
        ...action.payload
      };
      return {
        ...state,
        todos: [newTodo, ...state.todos]
      };
    }

    case "UPDATE_TODO": {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
        )
      };
    }

    case "DELETE_TODO": {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      };
    }

    case "TOGGLE_STATUS": {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload) return todo;
          
          const nextStatus = todo.status === "done" ? "todo" : "done";
          return { ...todo, status: nextStatus };
        })
      };
    }

    case "LOAD_FROM_STORAGE":
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
}