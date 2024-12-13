import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type todoType = {
  content: string;
  done: boolean;
};

type TodoProps = {
  todo: {
    content: string;
    done: boolean;
  };
  toggleTodo: (todo: todoType) => void;
};

export const TodoItem = ({ todo, toggleTodo }: TodoProps) => {
  return (
    <li style={{ width: "100%", listStyle: "none" }}>
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
        />{" "}
        {todo.content}
      </label>
    </li>
  );
};
