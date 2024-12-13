import { CSSProperties, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: (e: any) => void;
  typeButton?: "button" | "submit" | "reset" | undefined;
  title: string;
  id?: string;
  classButton?: string;
  ariaLabel?: string;
  style?: CSSProperties;
};
export const Button = ({
  children,
  onClick,
  typeButton,
  title,
  ariaLabel,
  id,
  classButton,
  style,
}: ButtonProps) => {
  return (
    <button
      id={id}
      className={classButton}
      onClick={onClick}
      type={typeButton}
      title={title}
      aria-label={ariaLabel}
      style={{
        border: "solid 2px #0b5d3e",
        background: " #48c0ac",
        color: "#0b5d3e",
        fontWeight: "bold",
        textTransform: "capitalize",
        ...style,
      }}
    >
      {children}
    </button>
  );
};
