import { useContext, useState } from "react";
import TodosContext from "../../../store/TodosContext";
import Button from "../../UI/Button";

const Form = () => {
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const todoCtx = useContext(TodosContext);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (input === "") {
      setError(true);
    } else {
      setError(false);
      todoCtx.addTodo(input);
      setInput("");
    }
  };

  return (
    <>
      <div className="mb-4">
        <label className="block text-xl mb-2" htmlFor="todoinput">
          Add new to do
        </label>
        <input
          className="form-input border border-black min-h-[2.6rem] rounded w-full py-2 px-4"
          name="todoinput"
          type="text"
          onChange={handleInput}
          value={input}
        />
        {error && <p className="mt-1 text-red-500">Please add a todo!</p>}
      </div>
      <Button onClick={handleSubmit} className="bg-indigo-200">
        + Add item
      </Button>
    </>
  );
};

export default Form;
