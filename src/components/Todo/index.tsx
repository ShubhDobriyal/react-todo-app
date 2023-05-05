import Card from "../UI/Card";
import Form from "./Form";
import List from "./List";

const Todo = () => {
  return (
    <div className="my-5 grid place-content-center">
      <Card className="w-[28rem] mb-12 p-6">
        <Form />
      </Card>
      <div className="w-[28rem]">
        <List />
      </div>
    </div>
  );
};

export default Todo;
