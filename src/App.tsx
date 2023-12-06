import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import { FormTask } from "./components/FormTask";
import { TaskItemList } from "./components/TaskItemList";
import { VisibilityControl } from "./components/VisibilityControl";
import { Footer } from "./components/Footer";

export const App = () => {
  const [taskItems, setTaskItems] = useState<
    { content: string; done: boolean }[]
  >([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const createNewTask = (taskContent: string): void => {
    if (!taskItems.find((task) => task.content === taskContent)) {
      setTaskItems([...taskItems, { content: taskContent, done: false }]);
      // console.log(taskContent)
    }
  };

  const toogleTask = (task: any) => {
    setTaskItems(
      taskItems.map((t) =>
        t.content === task.content ? { ...t, done: !t.done } : t
      )
    );
  };

  const cleanTasks = () => {
    setTaskItems(taskItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  useEffect(() => {
    const data = localStorage.getItem("TasksList");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    // console.log('change')
    localStorage.setItem("TasksList", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <>
      <h1 className="title" style={{}}>
        TO-DO
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
      </h1>
      <div
        className="wrapper"
        style={{
          margin: "10px auto",
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <FormTask createNewTask={createNewTask} />
        <TaskItemList
          tasks={taskItems}
          toogleTask={toogleTask}
          showCompleted={false}
        />
        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked: boolean) => setShowCompleted(checked)}
          cleanTasks={cleanTasks}
        />
        {showCompleted === true && (
          <TaskItemList
            tasks={taskItems}
            toogleTask={toogleTask}
            showCompleted={showCompleted}
          />
        )}
      </div>
      <Footer />
    </>
  );
};
