import Todo from "./components/Todo";
import { ToDoContextProvider } from "./store/TodosContext";

const App = () => {
  return (
    <ToDoContextProvider>
      <Todo />
    </ToDoContextProvider>
  );
};

export default App;
