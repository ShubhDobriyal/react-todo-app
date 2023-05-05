import { useContext, useState } from "react";
import { BsCheck2, BsPencil, BsTrash3 } from "react-icons/bs";
import TodosContext from "../../../../store/TodosContext";
import Button from "../../../UI/Button";
import Card from "../../../UI/Card";
import { ToDoItem } from "../../../todos.props";

const ListItem = ({ item }: { item: ToDoItem }) => {
  const { id, text, isDone } = item;

  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(text);

  const todoCtx = useContext(TodosContext);

  const todoLabel = isDone ? (
    <s>{text}</s>
  ) : (
    <input
      className={`active:outline-none focus:outline-none ${
        isEditing ? "border-b border-b-black " : "cursor-default"
      }`}
      value={updatedTitle}
      type="text"
      readOnly={!isEditing}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== "") setUpdatedTitle(e.target.value);
      }}
    />
  );

  return (
    <Card className="flex justify-between items-center mb-4 py-3 px-4">
      <h4 className="text-lg">{todoLabel}</h4>
      <div className="flex gap-2">
        {!isDone && !isEditing && (
          <>
            <Button
              onClick={() => {
                todoCtx.markDone(id);
              }}
              className="text-xl"
            >
              <BsCheck2 />
            </Button>
            <Button
              onClick={() => {
                setIsEditing(true);
              }}
              className=" bg-green-200 "
            >
              <BsPencil />
            </Button>
          </>
        )}

        {isEditing && !isDone && (
          <Button
            className=""
            onClick={() => {
              if (updatedTitle !== "") todoCtx.updateTodo(id, updatedTitle);
              setIsEditing(false);
            }}
          >
            Submit
          </Button>
        )}

        {isDone && !isEditing && (
          <Button
            onClick={() => {
              todoCtx.deleteTodo(id);
            }}
            className=" bg-red-200 "
          >
            <BsTrash3 />
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ListItem;
