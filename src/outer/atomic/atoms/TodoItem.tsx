import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faRightLong, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, FormEvent, useState } from "react";
import { Input } from "./Input";
import { TodoData } from "../../../types";
import { Button } from "./Button";

type TodoProps = {
  todo: TodoData;
  toggleTodo: (todo: TodoData) => void;
  fnAllTodos: Dispatch<React.SetStateAction<TodoData[]>>;
};

export const TodoItem = ({ todo, toggleTodo, fnAllTodos }: TodoProps) => {
  const [currentId, setCurrentId] = useState("000000");
  const [showEditForm, setShowEditForm] = useState(false);
  const [newValue, setNewValue] = useState(todo.content);

  const onShowEditForm = (id: string) => {
    setCurrentId(id);
    if (id !== todo.id) return;
    setShowEditForm((p) => !p);
  };

  const updateTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fnAllTodos((p) =>
      p.filter((c) => (c.id === currentId ? (c.content = newValue) : c.content))
    );
    // console.log({ e, elements: e.target, input: e.target[0].value });
    setShowEditForm(false);
  };

  return (
    <li
      key={todo.id}
      className="w-full list-none relative flex items-center justify-between gap-3 rounded-xl group/todo hover:bg-dark"
      // style={{
      //   width: "100%",
      //   listStyle: "none",
      //   position: "relative",
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "space-between",
      // }}
    >
      {!showEditForm && (
        <label
          // className="to-do-item"
          className="w-full flex items-center  gap-4 px-4 py-2 group-hover/todo:bg-transparent"
        >
          <FontAwesomeIcon
            icon={todo.done ? faCheckCircle : faCircle}
            className="text-teal-light"
          />
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => toggleTodo(todo)}
            className="hidden"
          />
          {todo.content}
        </label>
      )}
      {showEditForm && (
        <form className="to-do-item form-todo" onSubmit={(e) => updateTodo(e)}>
          <Input
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            style={{ fontSize: "20px", padding: "6px 6px" }}
          />
          <Button
            title="Update to-do"
            className="p-1 rounded-full text-base md:text-lg md:p-2 border-none bg-transparent"
          >
            <FontAwesomeIcon icon={faRightLong} />
          </Button>
        </form>
      )}

      <Button
        title="Edit to-do"
        className={`p-4 rounded-full text-base ${
          currentId === todo.id && showEditForm
            ? "text-teal"
            : "text-teal-dark hover:bg-teal-darker group-hover/todo:text-teal-light"
        } md:text-lg md:p-2 border-none bg-transparent`}
        onClick={() => onShowEditForm(todo.id)}
      >
        <FontAwesomeIcon
          icon={currentId === todo.id && showEditForm ? faXmark : faPen}
        />
      </Button>
    </li>
  );
};
