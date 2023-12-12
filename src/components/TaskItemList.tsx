import { TaskItem } from "./TaskItem";

type todoType = {
  content: string;
  done: boolean;
};

type TodoItemListProps = {
  todo: todoType[];
  toogleTodo: (todo: todoType) => void;
  showCompleted: boolean;
};

export const TodoItemList = ({
  todo,
  toogleTodo,
  showCompleted = false,
}: TodoItemListProps) => {
  const taskUnique = (doneValue: boolean) => {
    return (
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "20px",
        }}
      >
        {todo
          .filter((todo: { done: boolean }) => todo.done === doneValue)
          .map((todo: { content: string; done: boolean }) => (
            <TaskItem
              todo={todo}
              key={Math.floor(Math.random() * 1000000).toString()}
              toogleTodo={toogleTodo}
            />
          ))}
      </ul>
    );
  };
  if (!taskUnique)
    return (
      <p style={{ background: "red", color: "green" }}>
        you have no tasks done
      </p>
    );
  return (
    <div className="wrapper-task">
      <ul>{taskUnique(showCompleted)}</ul>
    </div>
  );
};
