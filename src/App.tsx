import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faListCheck,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

import { FormTask } from "./components/FormTask";
import { TodoItemList } from "./components/TaskItemList";
import { Footer } from "./components/Footer";
import { Button } from "./components/Button";

const HeaderHeigthPixels = 140;
const HeaderWidth = 100;
const FooterHeigthPixels = 60;

type todoType = {
  content: string;
  done: boolean;
};

export const App = () => {
  const [todos, setTodos] = useState<{ content: string; done: boolean }[]>([]);
  const [procecedTodos, setProcecedTodos] = useState<
    { content: string; done: boolean }[]
  >([]);
  const [showCompleted, setShowCompleted] = useState(true);

  const createNewTodo = (todoContent: string): void => {
    if (!todos.find((task) => task.content === todoContent)) {
      setTodos([...todos, { content: todoContent, done: false }]);
    }
  };

  const toogleTodo = (task: todoType) => {
    setTodos(
      todos.map((t) =>
        t.content === task.content ? { ...t, done: !t.done } : t
      )
    );
  };

  const removeAllCompletedTodos = () => {
    setTodos(todos.filter((task) => !task.done));
    setShowCompleted(false);
  };

  const onFilterNotes = (query: string) => {
    const filteredNotes = todos.filter((cur) => cur.content.includes(query));
    setProcecedTodos(filteredNotes);
  };

  useEffect(() => {
    const data = localStorage.getItem("TasksList");
    if (data) {
      setTodos(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("TasksList", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    setProcecedTodos(todos);
  }, [todos]);

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        style={{
          width: `${HeaderWidth}%`,
          height: `${HeaderHeigthPixels}px`,
          color: "#48c0ac",
        }}
      >
        <h1
          className="title"
          style={{
            fontWeight: "lighter",
            textTransform: "capitalize",
            textAlign: "center",
          }}
        >
          <FontAwesomeIcon icon={faListCheck} className="icon-title" /> to-do
        </h1>
      </header>
      <main
        style={{
          width: "100%",
          height: `calc(100vh - ${HeaderHeigthPixels + FooterHeigthPixels}px)`,
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "auto auto 1fr",
          gap: "20px",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        {/* filter todos */}
        <section
          style={{
            margin: "auto",
            maxWidth: "900px",
            width: "100%",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FormTask
            createNewTask={createNewTodo}
            onChangeInputCallback={onFilterNotes}
          />
        </section>
        {/* todos options */}
        <section
          style={{
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: "900px",
            color: "#48c0ac",
            gap: "20px",
          }}
        >
          <div>
            {procecedTodos.length !== todos.length && (
              <p>
                You have {procecedTodos.length} of {todos.length} to-dos
              </p>
            )}
            {procecedTodos.length === todos.length && (
              <p>You have {todos.length} to-dos</p>
            )}
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button
              onClick={() => setShowCompleted((prev) => !prev)}
              title={
                showCompleted
                  ? "Hide completed todos"
                  : "Display complete todos"
              }
            >
              <FontAwesomeIcon
                icon={showCompleted ? faEyeSlash : faEye}
                style={{
                  background: "transparent",
                }}
              />{" "}
            </Button>
            {todos.length > 0 && (
              <Button
                onClick={removeAllCompletedTodos}
                title="Delete all completed"
              >
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  style={{
                    background: "transparent",
                  }}
                />{" "}
              </Button>
            )}
          </div>
        </section>
        {/* to-dos */}
        <section
          style={{
            margin: "0px auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
            maxWidth: "900px",
            width: "100%",
            color: "white",
            fontSize: "24px",
          }}
        >
          {!todos.length && (
            <p style={{ textAlign: "center", opacity: "0.5" }}>
              You do not have todos yet
            </p>
          )}
          {Boolean(todos.length) && !procecedTodos.length && (
            <p>There is no todos with the query you wrote</p>
          )}
          <TodoItemList
            todo={procecedTodos}
            toogleTodo={toogleTodo}
            showCompleted={false}
          />
          {showCompleted && (
            <TodoItemList
              todo={procecedTodos}
              toogleTodo={toogleTodo}
              showCompleted={showCompleted}
            />
          )}
        </section>
      </main>
      <Footer style={{ height: `${FooterHeigthPixels}px` }} />
    </div>
  );
};
