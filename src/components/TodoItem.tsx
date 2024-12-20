import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Button } from "./Button";
import { faPen, faRightLong, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, FormEvent, useState } from "react";
import { Input } from "../outer/atomic/atoms/Input";
import { TodoData } from "../types";
import { Button } from "../outer/atomic/atoms/Button";

type TodoProps = {
  // currentTodoId: number;
  todo: TodoData;
  toggleTodo: (todo: TodoData) => void;
  // allTodos: TodoData[];
  fnAllTodos: Dispatch<React.SetStateAction<TodoData[]>>;
};

export const TodoItem = ({
  todo,
  toggleTodo,
  // allTodos,
  fnAllTodos,
}: TodoProps) => {
  const [currentId, setCurrentId] = useState("000000");
  const [showEditForm, setShowEditForm] = useState(false);
  const [newValue, setNewValue] = useState(todo.content);

  const onShowEditForm = (id: string) => {
    // setShowEditForm(false);

    setCurrentId(id);
    if (id !== todo.id) return;
    setShowEditForm((p) => !p);
  };

  const updateTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fnAllTodos((p) =>
      p.filter((c) => (c.id === currentId ? (c.content = newValue) : c.content))
    );
    console.log({ e, elements: e.target, input: e.target[0].value });
    setShowEditForm(false);
  };

  return (
    <li
      style={{
        width: "100%",
        listStyle: "none",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      key={todo.id}
    >
      {!showEditForm && (
        <label className="to-do-item">
          <FontAwesomeIcon icon={faCircle} className="non-check" />
          <FontAwesomeIcon icon={faCheckCircle} className="check" />
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => toggleTodo(todo)}
            className="text-base"
            // style={{
            //   accentColor: `${todo.done ? "#48c0ac" : "#2b2a2a"}`,
            //   width: "20px",
            //   height: "20px",
            //   display: "none",
            // }}
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

            // className="form-edit-button"
          >
            <FontAwesomeIcon icon={faRightLong} />
          </Button>
        </form>
      )}

      <Button
        title="Edit to-do"
        // className="edit-button"
        className="p-4 rounded-full text-base text-teal md:text-lg md:p-2 border-none bg-transparent"
        // className="bg-transparent border-none bg-none text-teal hover:bg-transparent hover:text-teal-light p-2 rounded-full text-lg md:text-2xl md:p-3"
        onClick={() => onShowEditForm(todo.id)}
        // style={{
        //   padding: `${
        //     currentId === todo.id && showEditForm ? "4px 8px" : "4px 6px"
        //   }`,
        // }}
      >
        <FontAwesomeIcon
          icon={currentId === todo.id && showEditForm ? faXmark : faPen}
        />
      </Button>
    </li>
  );
};
