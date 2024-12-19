import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

export const Button = ({
  children,
  style,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`border-2 border-teal-light bg-teal-darker text-teal-light font-bold capitalize grid place-items-center hover:bg-teal-light hover:text-teal-darker ${className}`}
      style={{ ...style }}
    >
      {children}
    </button>
  );
};
