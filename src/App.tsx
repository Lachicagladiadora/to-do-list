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
// const FooterHeightPixels = 60;

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
      <header>
        <h1 className="title">
          <FontAwesomeIcon icon={faListCheck} className="icon-title" /> to - do
        </h1>
      </header>
      <main
        style={{
          width: "100%",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "0px 24px",
        }}
      >
        {/* filter todos */}
        <section
          style={{
            margin: "auto",
            maxWidth: "900px",
            flex: `${todos.length > 0 ? "" : "1"}`,
            width: "100%",
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
                padding: "40px 0px",
              }}
            >
              You do not have todos yet
            </p>
          )}
        </section>
        {/* todos options */}
        {todos.length !== 0 && (
          <section className="options-container">
            <div>
              {procecedTodos.length !== todos.length && (
                <p className="options-text">
                  You have <strong>{procecedTodos.length}</strong> to-dos that
                  start with <strong>"{query}"</strong>
                </p>
              )}
              {procecedTodos.length === todos.length && (
                <p className="options-text">You have {todos.length} to-dos</p>
              )}
            </div>
            <div className="container-buttons-options">
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
                classButton="eye-button"
              >
                <FontAwesomeIcon icon={showCompleted ? faEyeSlash : faEye} />{" "}
              </Button>
              <Button
                onClick={removeAllCompletedTodos}
                title="Delete all completed"
                ariaLabel="Delete all completed"
                classButton="trash-button"
              >
                <FontAwesomeIcon icon={faTrashAlt} />
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
      <Footer />
    </div>
  );
};
