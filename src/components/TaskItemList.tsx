import { TaskItem } from "./TaskItem"

type TaskItemListProps = {
  tasks: any,
  toogleTask: (task: any) => void,
  showCompleted: boolean,
  title?: string,
}

export const TaskItemList = ({ title, tasks, toogleTask, showCompleted = false }: TaskItemListProps) => {

  const taskUnique = (doneValue: boolean) => {
    console.log(doneValue)
    return (
      tasks
        .filter((task: { done: boolean }) => task.done === doneValue)
        .map((task: { content: string, done: boolean }) => (
          <TaskItem
            task={task}
            key={(Math.floor(Math.random() * 1000000)).toString()}
            toogleTask={toogleTask}
          />
        ))
    )
  }
  if (!taskUnique) return (
    <p style={{ background: 'red', color: 'green' }}>you have no tasks done</p>
  )
  return (
    <div className="wrapper-task">
      <h2
        style={{
          textAlign:'center',
          fontWeight:'bolder',
          color:'#48c0ac',
        }}
      >
        Tasks {title}
      </h2>
      <ul>
        {taskUnique(showCompleted)}
      </ul>
    </div>
  )
}