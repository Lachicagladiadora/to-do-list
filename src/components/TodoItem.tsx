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

export const TodoItem = ({ todo, toogleTodo }: TodoProps) => {
  return (
    <li style={{ listStyle: "none" }}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toogleTodo(todo)}
        style={{
          accentColor: `${todo.done ? "#48c0ac" : "#2b2a2a"}`,
          width: "20px",
          height: "20px",
        }}
      />{" "}
      {todo.content}
    </li>
  );
};
