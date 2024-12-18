import { CSSProperties, useCallback } from "react";
import { Input } from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../outer/atomic/atoms/Button";

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
        createNewTodo(newTodoValue.trim());
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
        ...style,
      }}
      onSubmit={onSubmit}
    >
      <Input
        value={newTodoValue}
        onChange={(e): void => {
          const newValue = (e.target as HTMLInputElement).value;
          onChangeInputCallback(newValue);
          return !newValue ? setNewTodoValue("") : setNewTodoValue(newValue);
        }}
        placeholder="Write a new to-do"
      />
      <Button
        title="Save To-Do"
        aria-label="Button save To-Do"
        className="p-2 text-3xl rounded-full md:p-3 md:text-5xl"
      >
        <FontAwesomeIcon icon={faRightLong} />
      </Button>
    </form>
  );
};
