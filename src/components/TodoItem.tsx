import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./Button";
import { faPen, faRightLong, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FormEvent, useState } from "react";
import { Input } from "./Input";
import { TodoData } from "../types";

type TodoProps = {
  // currentTodoId: number;
  todo: TodoData;
  toggleTodo: (todo: TodoData) => void;
};

export const TodoItem = ({ todo, toggleTodo }: TodoProps) => {
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
    //use allTodos
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
            style={{
              accentColor: `${todo.done ? "#48c0ac" : "#2b2a2a"}`,
              width: "20px",
              height: "20px",
              display: "none",
            }}
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
          <Button title="Update to-do" classButton="form-edit-button">
            <FontAwesomeIcon icon={faRightLong} />
          </Button>
        </form>
      )}

      <button
        title="Edit to-do"
        className="edit-button"
        onClick={() => onShowEditForm(todo.id)}
        style={{
          padding: `${
            currentId === todo.id && showEditForm ? "4px 8px" : "4px 6px"
          }`,
        }}
      >
        <FontAwesomeIcon
          icon={currentId === todo.id && showEditForm ? faXmark : faPen}
        />
      </button>
    </li>
  );
};
