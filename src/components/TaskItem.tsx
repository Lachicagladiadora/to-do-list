type todoType = {
  content: string;
  done: boolean;
};

type TodoProps = {
  todo: {
    content: string;
    done: boolean;
  };
  toogleTodo: (todo: todoType) => void;
};

export const TaskItem = ({ todo, toogleTodo }: TodoProps) => {
  return (
    <li style={{ listStyle: "none" }}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toogleTodo(todo)}
        style={{
          color: "white",
        }}
      />{" "}
      {todo.content}
    </li>
  );
};
