import { CSSProperties, useCallback } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faMailForward } from "@fortawesome/free-solid-svg-icons";
import { faRightLong } from "@fortawesome/free-solid-svg-icons/faRightLong";

type FormTaskProps = {
  createNewTodo: (newTodoValue: string) => void;
  onChangeInputCallback: (newValue: string) => void;
  newTodoValue: string;
  setNewTodoValue: React.Dispatch<React.SetStateAction<string>>;
  style?: CSSProperties;
};

export const FormTask = ({
  createNewTodo,
  onChangeInputCallback,
  newTodoValue,
  setNewTodoValue,
  style,
}: FormTaskProps) => {
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
    [createNewTodo, newTodoValue, setNewTodoValue]
  );

  return (
    <form
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
        padding: "40px 0px",
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
          padding: "14px 20px",
          fontSize: "24px",
          color: "rgb(220, 255, 242)",
          width: "100%",
        }}
      />
      <Button
        title="Save To-Do"
        onClick={onSubmit}
        ariaLabel="Save To-Do"
        style={{
          color: "rgb(11, 93, 62)",
          fontSize: "20px",
          padding: "14px",
          borderRadius: "71.5px",
        }}
      >
        <FontAwesomeIcon
          icon={faCheck}
          style={{
            background: "transparent",
            width: "26px",
            height: "26px",
            // transform: "rotate(180deg)",
          }}
        />
      </Button>
    </form>
  );
};
