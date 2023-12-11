import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import { FormTask } from "./components/FormTask";
import { TodoItemList } from "./components/TaskItemList";
import { Footer } from "./components/Footer";
import { Button } from "./components/Button";

type todoType = {
  content: string;
  done: boolean;
};

export const App = () => {
  const [todoItems, setTodoItems] = useState<
    { content: string; done: boolean }[]
  >([]);
  const [showCompleted, setShowCompleted] = useState(true);

  const createNewTodo = (todoContent: string): void => {
    if (!todoItems.find((task) => task.content === todoContent)) {
      setTodoItems([...todoItems, { content: todoContent, done: false }]);
    }
  };

  const toogleTodo = (task: todoType) => {
    setTodoItems(
      todoItems.map((t) =>
        t.content === task.content ? { ...t, done: !t.done } : t
      )
    );
  };

  const removeAllCompletedTodos = () => {
    setTodoItems(todoItems.filter((task) => !task.done));
    setShowCompleted(true);
  };

  useEffect(() => {
    const data = localStorage.getItem("TasksList");
    if (data) {
      setTodoItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("TasksList", JSON.stringify(todoItems));
  }, [todoItems]);

  return (
    <div
      style={{
        height: "100%",
        display: "grid",
        gridTemplateAreas: "header main footer'/auto",
        gap: "0px",
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
          color: "#48c0ac",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            textTransform: "capitalize",
            textAlign: "center",
            zIndex: "2",
          }}
        >
          <FontAwesomeIcon icon={faListCheck} /> to-do
        </h1>
      </header>
      <main
        style={{
          margin: "0px auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          alignItems: "center",
          flex: "1",
          gridArea: "main",
          position: "absolute",
          top: "112px",
        }}
      >
        <section
          style={{
            width: "100vw",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "100px",
            position: "absolute",
            top: "-15px",
            background: "linear-gradient(0deg,#2b2a2a 0%, black 100%)",
          }}
        >
          <FormTask
            createNewTask={createNewTodo}
            style={{
              maxWidth: "900px",
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
            position: "absolute",
            top: "160px",
            color: "#48c0ac",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              height: "32vh",
              maxWidth: "900px",
              border: "solid 1px #0b5d3e",
              overflowY: "scroll",
              padding: "20px",
              paddingTop: "20px",
              borderRadius: "15px",
            }}
          >
            {todoItems.length > 0 && (
              <Button
                onClick={removeAllCompletedTodos}
                style={{ position: "sticky" }}
              >
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  style={{
                    background: "transparent",
                  }}
                />{" "}
                Delete all completed
              </Button>
            )}
            {showCompleted && (
              <TodoItemList
                tasks={todoItems}
                toogleTask={toogleTodo}
                showCompleted={showCompleted}
              />
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              height: "32vh",
              maxWidth: "900px",
              border: "solid 1px #0b5d3e",
              overflowY: "scroll",
              padding: "20px",
              borderRadius: "15px",
            }}
          >
            <TodoItemList
              tasks={todoItems}
              toogleTask={toogleTodo}
              showCompleted={false}
            />
          </div>
        </section>
      </main>
      <Footer style={{ gridArea: "footer" }} />
    </div>
  );
};
