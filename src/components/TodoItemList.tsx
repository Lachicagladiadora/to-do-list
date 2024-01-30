import { TodoItem } from "./TodoItem";

type todoType = {
  content: string;
  done: boolean;
};

type TodoItemListProps = {
  todo: todoType[];
  toggleTodo: (todo: todoType) => void;
  showCompleted: boolean;
};

export const TodoItemList = ({
  todo,
  toggleTodo,
  showCompleted = false,
}: TodoItemListProps) => {
  const todoUnique = (doneValue: boolean) => {
    return (
      <ul
        style={{
          minWidth: "300px",
          // alignItems: "start",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "20px",
        }}
      >
        {todo
          .filter((todo: { done: boolean }) => todo.done === doneValue)
          .map((todo: { content: string; done: boolean }) => (
            <TodoItem
              todo={todo}
              key={Math.floor(Math.random() * 1000000).toString()}
              toggleTodo={toggleTodo}
            />
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
