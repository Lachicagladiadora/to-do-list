import { CSSProperties, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: (e: any) => void;
  type?: string;
  title: string;
  id?: string;
  style?: CSSProperties;
};
export const Button = ({
  children,
  onClick,
  title,
  id,
  style,
}: ButtonProps) => {
  return (
    <button
      id={id}
      onClick={onClick}
      type="submit"
      title={title}
      style={{
        borderStyle: "none",
        padding: "5px 8px",
        border: "solid 2px #0b5d3e",
        background: " #48c0ac",
        color: "#0b5d3e",
        borderRadius: "20px",
        fontWeight: "bold",
        textTransform: "capitalize",
        ...style,
      }}
    >
      {children}
    </button>
  );
};
