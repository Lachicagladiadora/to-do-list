import { TaskItem } from "./TaskItem";

type todoType = {
  content: string;
  done: boolean;
};

type TodoItemListProps = {
  tasks: todoType[];
  toogleTask: (task: todoType) => void;
  showCompleted: boolean;
};

export const TodoItemList = ({
  tasks,
  toogleTask,
  showCompleted = false,
}: TodoItemListProps) => {
  const taskUnique = (doneValue: boolean) => {
    return tasks
      .filter((task: { done: boolean }) => task.done === doneValue)
      .map((task: { content: string; done: boolean }) => (
        <TaskItem
          task={task}
          key={Math.floor(Math.random() * 1000000).toString()}
          toogleTask={toogleTask}
        />
      ));
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
