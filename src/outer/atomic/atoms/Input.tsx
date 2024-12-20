import { ComponentPropsWithoutRef } from "react";

type InputProps = ComponentPropsWithoutRef<"input">;

export const Input = ({
  placeholder,
  value,
  onChange,
  className,
  style,
}: InputProps) => {
  return (
    <input
      // type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      // className="input"
      className={`w-full outline-none px-4 py-2 rounded-lg border-none bg-black text-teal-lighter md:px-6 md:py-3 ${className}`}
      style={{ ...style }}
    />
  );
};
