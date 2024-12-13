import { CSSProperties, useCallback } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
// import { faRightLong } from "@fortawesome/free-solid-svg-icons/faRightLong";

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
        onClick={onSubmit}
        ariaLabel="Save To-Do"
        classButton="button-form"
      >
        <FontAwesomeIcon icon={faCheck} className="button-form-icon" />
      </Button>
    </form>
  );
};
