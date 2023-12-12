type TaskItemProps = {
  task: {
    content: string;
    done: boolean;
  };
  toogleTask: (task: any) => void;
};

export const TaskItem = ({ task, toogleTask }: TaskItemProps) => {
  return (
    <li style={{ listStyle: "none" }}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => toogleTask(task)}
        style={{
          color: "white",
        }}
      />{" "}
      {task.content}
    </li>
  );
};
