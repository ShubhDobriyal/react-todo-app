import { ReactNode, createContext, useEffect, useState } from "react";
import { ToDoItem } from "../components/todos.props";

interface ToDoContextType {
  todos: ToDoItem[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
  markDone: (id: string) => void;
}

const TodosContext = createContext<ToDoContextType>({
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
  markDone: () => {},
});

const initialTodos = localStorage.getItem("toDos");

const todoItems: { id: string; text: string; isDone: boolean }[] = initialTodos
  ? JSON.parse(initialTodos)
  : [];

export const ToDoContextProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<ToDoItem[]>(todoItems);

  const addTodo = (text: string) => {
    const newItem = {
      id: Math.floor(Math.random() * Date.now()).toString(16),
      text: text,
      isDone: false,
    };

    setTodos((prev) => [...prev, newItem]);
  };

  const deleteTodo = (id: string) => {
    const filteredTodos = todos.filter((item) => item.id !== id);
    setTodos(filteredTodos);
  };

  const updateTodo = (id: string, text: string) => {
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, text } : item
    );
    setTodos(updatedTodos);
  };

  const markDone = (id: string) => {
    const updatedMarkedTodos = todos.map((item) => {
      if (item.id === id) {
        return !item.isDone ? { ...item, isDone: true } : item;
      } else {
        return item;
      }
    });
    setTodos(updatedMarkedTodos);
  };

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(todos));
  }, [todos]);

  const ToDoContextValues = {
    todos,
    addTodo,
    deleteTodo,
    updateTodo,
    markDone,
  };

  return (
    <TodosContext.Provider value={ToDoContextValues}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContext;
