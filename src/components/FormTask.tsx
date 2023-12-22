import { CSSProperties, useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faSave } from "@fortawesome/free-solid-svg-icons";

type FormTaskProps = {
  createNewTask: (newTaskValue: string) => void;
  onChangeInputCallback: (newValue: string) => void;
  style?: CSSProperties;
};

export const FormTask = ({
  createNewTask,
  onChangeInputCallback,
  style,
}: FormTaskProps) => {
  const [newTaskValue, setNewTaskValue] = useState("");

  const onSubmit = (_event: { preventDefault: () => void }) => {
    _event.preventDefault();
    createNewTask(newTaskValue);
    window.localStorage.setItem("TasksList", newTaskValue);
    setNewTaskValue("");
  };

  return (
    <form
      onSubmit={onSubmit}
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
        value={newTaskValue}
        onChange={(event) => {
          const newValue = (event.target as HTMLInputElement).value;
          setNewTaskValue(newValue);
          onChangeInputCallback(newValue);
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
        style={{
          color: "rgb(11, 93, 62)",
          fontSize: "20px",
        }}
      >
        <FontAwesomeIcon
          icon={faArrowUp}
          style={{ background: "transparent", width: "30px", height: "30px" }}
        />
      </Button>
    </form>
  );
};
