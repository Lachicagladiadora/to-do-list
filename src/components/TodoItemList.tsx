import { TodoItem } from "./TodoItem";

type todoType = {
  content: string;
  done: boolean;
  id: number;
};

type TodoItemListProps = {
  todos: todoType[];
  toggleTodo: (todo: todoType) => void;
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
          .map((todo: { content: string; done: boolean; id: number }) => (
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
