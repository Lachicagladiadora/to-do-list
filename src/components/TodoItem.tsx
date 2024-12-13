import { faCircle, faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./Button";
import { faPen, faRightLong, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Input } from "./Input";
// import { useState } from "react";

type todoType = {
  content: string;
  done: boolean;
  id: number;
};

type TodoProps = {
  // currentTodoId: number;
  todo: todoType;
  toggleTodo: (todo: todoType) => void;
};

export const TodoItem = ({ todo, toggleTodo }: TodoProps) => {
  const [currentId, setCurrentId] = useState(0);
  const [showEditForm, setShowEditForm] = useState(false);
  const [newValue, setNewValue] = useState("");

  const onShowEditForm = (id: number) => {
    // setShowEditForm(false);
    setCurrentId(id);
    if (id !== todo.id) return;
    setShowEditForm((p) => !p);
  };

  return (
    <li
      style={{ width: "100%", listStyle: "none", position: "relative" }}
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
              // borderRadius: "20px",
            }}
          />
          {todo.content}
        </label>
      )}
      {showEditForm && (
        <form className="to-do-item form-todo">
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
      <Button
        title="Edit to-do"
        classButton="edit-button"
        onClick={() => onShowEditForm(todo.id)}
        style={{
          padding: `${
            currentId === todo.id && showEditForm ? "4px 8px" : "4px 6px"
          }`,
        }}
      >
        {currentId === todo.id && showEditForm ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faPen} />
        )}
      </Button>
    </li>
  );
};
