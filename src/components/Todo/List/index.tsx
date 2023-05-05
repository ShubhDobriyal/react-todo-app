import { useContext } from "react";
import TodosContext from "../../../store/TodosContext";
import ListItem from "./ListItem";

const List = () => {
  const todoCtx = useContext(TodosContext);

  return (
    <>
      {todoCtx.todos.map((item) => {
        return <ListItem key={item.id} item={item} />;
      })}
    </>
  );
};

export default List;
