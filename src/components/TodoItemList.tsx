import { TodoData } from "../types";
import { getId } from "../utilities";
import { TodoItem } from "./TodoItem";

type TodoItemListProps = {
  todos: TodoData[];
  toggleTodo: (todo: TodoData) => void;
  showCompleted: boolean;
};

export const TodoItemList = ({
  todos,
  toggleTodo,
  showCompleted = false,
}: TodoItemListProps) => {
  const todoUnique = (doneValue: boolean) => {
    return (
      <ul
        style={{
          minWidth: "300px",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "8px",
        }}
      >
        {todos
          .filter((todo: { done: boolean }) => todo.done === doneValue)
          .map((todo: { content: string; done: boolean; id: string }) => (
            <TodoItem todo={todo} key={getId()} toggleTodo={toggleTodo} />
          ))}
      </ul>
    );
  };
  if (!todoUnique)
    return (
      <p style={{ background: "red", color: "green" }}>
        you have no tasks done
      </p>
    );
  return (
    <div className="wrapper-task" style={{ width: "100%" }}>
      <ul>{todoUnique(showCompleted)}</ul>
    </div>
  );
};
