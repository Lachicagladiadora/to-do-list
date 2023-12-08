import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faTrash,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

import { FormTask } from "./components/FormTask";
import { TaskItemList } from "./components/TaskItemList";
import { VisibilityControl } from "./components/VisibilityControl";
import { Footer } from "./components/Footer";
import { Button } from "./components/Button";

export const App = () => {
  const [taskItems, setTaskItems] = useState<
    { content: string; done: boolean }[]
  >([]);
  const [showCompleted, setShowCompleted] = useState(true);

  const createNewTask = (taskContent: string): void => {
    if (!taskItems.find((task) => task.content === taskContent)) {
      setTaskItems([...taskItems, { content: taskContent, done: false }]);
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
    localStorage.setItem("TasksList", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <div
      style={{
        height: "100%",
        display: "grid",
        gridTemplateAreas: "header main footer'/auto",
        gap: "0px",
        border: "solid 2px orange",
      }}
    >
      <header
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
          background: "black",
          position: "absolute",
          top: "0px",
          width: "100%",
          gridArea: "header",
          border: "solid 2px white",
        }}
      >
        <h1
          style={{
            fontWeight: "bold",
            textTransform: "capitalize",
            color: "#48c0ac",
            textAlign: "center",
            fontSize: "60px",
            zIndex: "2",
          }}
        >
          to-do
        </h1>
      </header>
      <main
        // className="wrapper"
        style={{
          margin: "0px auto",
          width: "100%",
          // height: "80vh",
          // maxWidth: "900px",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          alignItems: "center",
          flex: "1",
          // background: "#2b2a2a",
          gridArea: "main",
          border: "solid 2px violet",
          position: "absolute",
          top: "112px",
        }}
      >
        <section
          style={{
            width: "100vw",
            height: "80px",
            background: "yellow",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "100px",
            position: "absolute",
            // top: "112px",
          }}
        >
          <FormTask
            createNewTask={createNewTask}
            style={{
              // background: "linearGradient( 0deg, black, pink)",
              maxWidth: "900px",
              border: "solid 2px blue",
              // margin: "0px auto",
            }}
          />
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "26px",
            maxWidth: "900px",
            height: "60vh",
            border: "solid 2px green",
            position: "absolute",
            top: "230px",
            // background: "red",
            // border: "solid 2px yellowgreen",
          }}
        >
          <div
            style={{
              position: "relative",
              height: "32vh",
              border: "solid 2px red",
            }}
          >
            {taskItems.length > 0 && (
              <Button
                onClick={cleanTasks}
                style={{ position: "absolute", top: "0px", right: "0px" }}
              >
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  style={{
                    background: "transparent",
                  }}
                />{" "}
                Delete to-do completed
              </Button>
            )}
            {showCompleted && (
              <TaskItemList
                tasks={taskItems}
                toogleTask={toogleTask}
                showCompleted={showCompleted}
              />
            )}
          </div>
          <div style={{ height: "32vh", border: "solid 2px red" }}>
            <TaskItemList
              tasks={taskItems}
              toogleTask={toogleTask}
              showCompleted={false}
            />
          </div>
        </section>
      </main>
      <Footer style={{ gridArea: "footer" }} />
    </div>
  );
};
