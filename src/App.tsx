import { useCallback, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faListCheck,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

import { FormTask } from "./components/FormTask";
import { TodoItemList } from "./components/TodoItemList";
import { Footer } from "./components/Footer";
import { Button } from "./components/Button";

// const HeaderHeightPixels = 140;
// const HeaderWidth = 100;
const FooterHeightPixels = 60;

type todoType = {
  content: string;
  done: boolean;
};

export const App = () => {
  const [query, setQuery] = useState<string>("");
  const [todos, setTodos] = useState<{ content: string; done: boolean }[]>([]);
  const [procecedTodos, setProcecedTodos] = useState<
    { content: string; done: boolean }[]
  >([]);
  const [showCompleted, setShowCompleted] = useState(true);

  const createNewTodo = (todoContent: string): void => {
    if (!todos.find((task) => task.content === todoContent)) {
      console.log({ todoContent });
      setTodos([{ content: todoContent, done: false }, ...todos]);
    }
  };

  const toggleTodo = (task: todoType) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.content === task.content ? { ...t, done: !t.done } : t
      )
    );
  };

  const removeAllCompletedTodos = () => {
    setTodos(todos.filter((task) => !task.done));
    setShowCompleted(false);
  };

  const onFilterNotes = useCallback(
    (query: string) => {
      console.log({ todos, query });
      const filteredNotes = todos.filter((cur) => cur.content.includes(query));
      console.log({ filteredNotes });
      setProcecedTodos(filteredNotes);
    },
    [todos]
  );

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
    // setProcecedTodos(todos);
    console.log("useEffect query");
    console.log({ query });
    onFilterNotes(query);
  }, [query, onFilterNotes]);

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
          // width: `${HeaderWidth}%`,
          // height: `${HeaderHeightPixels}px`,
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
          flex: 1,
          // height: `calc(100vh - ${HeaderHeightPixels + FooterHeightPixels}px)`,
          // display: "grid",
          // gridTemplateColumns: "1fr",
          // gridTemplateRows: "auto auto 1fr",
          // gap: "20px",
          // display: `${todos.length > 0 ? "block" : "flex"}`,
          // alignItems: `${todos.length > 0 ? "" : "center"}`,
          // justifyContent: `${todos.length > 0 ? "" : "center"}`,
          display: "flex",
          flexDirection: "column",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        {/* filter todos */}
        <section
          style={{
            margin: "auto",
            maxWidth: "900px",
            flex: `${todos.length > 0 ? "" : "1"}`,
            width: "100%",
            height: "80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FormTask
            createNewTodo={createNewTodo}
            onChangeInputCallback={onFilterNotes}
            newTodoValue={query}
            setNewTodoValue={setQuery}
          />
          {!todos.length && (
            <p
              style={{
                textAlign: "center",
                opacity: "0.5",
                color: "white",
                fontSize: "24px",
              }}
            >
              You do not have todos yet
            </p>
          )}
        </section>
        {/* todos options */}
        {todos.length !== 0 && (
          <section
            style={{
              margin: "auto",
              padding: "40px 0px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              maxWidth: "900px",
              color: "#48c0ac",
              gap: "20px",
            }}
          >
            <div style={{ fontSize: "26px" }}>
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
                    : "Display completed todos"
                }
                ariaLabel={
                  showCompleted
                    ? "Hide completed todos"
                    : "Display completed todos"
                }
                style={{
                  fontSize: "20px",
                  padding: "16px ",
                  borderRadius: "32px",
                }}
              >
                <FontAwesomeIcon
                  icon={showCompleted ? faEyeSlash : faEye}
                  // style={{
                  //   background: "transparent",
                  //   width: "28px",
                  //   height: "28px",
                  //   // borderRadius: "15px",
                  // }}
                />{" "}
              </Button>
              <Button
                onClick={removeAllCompletedTodos}
                title="Delete all completed"
                ariaLabel="Delete all completed"
                style={{
                  fontSize: "20px",
                  padding: "12px 19px",
                  borderRadius: "32px",
                }}
              >
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  // style={{
                  //   background: "transparent",
                  //   width: "30px",
                  //   height: "30px",
                  // }}
                />
              </Button>
            </div>
          </section>
        )}
        {/* to-dos */}
        {todos.length !== 0 && (
          <section
            style={{
              margin: "0px auto",
              flex: "1",
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
            {/* {!todos.length && (
            <p style={{ textAlign: "center", opacity: "0.5" }}>
              You do not have todos yet
            </p>
          )} */}
            {Boolean(todos.length) && !procecedTodos.length && (
              <p>There is no todos with the query you wrote</p>
            )}
            <TodoItemList
              todo={procecedTodos}
              toggleTodo={toggleTodo}
              showCompleted={false}
            />
            {showCompleted && (
              <TodoItemList
                todo={procecedTodos}
                toggleTodo={toggleTodo}
                showCompleted={showCompleted}
              />
            )}
          </section>
        )}
      </main>
      <Footer style={{ height: `${FooterHeightPixels}px` }} />
    </div>
  );
};
