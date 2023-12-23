import { CSSProperties, useCallback, useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailForward } from "@fortawesome/free-solid-svg-icons";

type FormTaskProps = {
  createNewTodo: (newTodoValue: string) => void;
  onChangeInputCallback: (newValue: string) => void;
  style?: CSSProperties;
};

export const FormTask = ({
  createNewTodo,
  onChangeInputCallback,
  style,
}: FormTaskProps) => {
  const [newTodoValue, setNewTodoValue] = useState("");

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!newTodoValue) return;
      if (newTodoValue) {
        createNewTodo(newTodoValue);
        window.localStorage.setItem("TasksList", newTodoValue);
        setNewTodoValue("");
      }
    },
    [createNewTodo, newTodoValue]
  );

  // const onClick = () =>  {
  //   if (newTodoValue) return {onSubmit()}
  //   else {console.warn("todo invalid")}
  // }

  return (
    <form
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
        ...style,
      }}
    >
      <Input
        value={newTodoValue}
        onChange={(e): void => {
          const newValue = (e.target as HTMLInputElement).value.trim();
          onChangeInputCallback(newValue);
          return !newValue ? setNewTodoValue("") : setNewTodoValue(newValue);
        }}
        placeholder="Write a new to-do"
        style={{
          padding: "20px",
          fontSize: "24px",
          width: "100%",
        }}
      />
      <Button
        title="Save To-Do"
        onClick={onSubmit}
        style={{
          color: "rgb(11, 93, 62)",
          fontSize: "20px",
        }}
      >
        <FontAwesomeIcon
          icon={faMailForward}
          style={{
            background: "transparent",
            width: "30px",
            height: "30px",
            transform: "rotate(180deg)",
          }}
        />
      </Button>
    </form>
  );
};
