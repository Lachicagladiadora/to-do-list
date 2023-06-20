import { CSSProperties, DetailedHTMLProps, FormEvent, InputHTMLAttributes } from "react"


type InputProps = {
  value?: string,
  placeholder?: string,
  style?: CSSProperties,
  onChange: (event: FormEvent<HTMLInputElement>) => void | DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
}

export const Input = ({ placeholder, value, onChange, style }: InputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        borderRadius: '35px',
        borderStyle: 'none',
        padding: '5px 10px',
        border: 'solid 2px #0b5d3e',
        background: 'black',
        fontWeight: '700',
        color: 'pink',
        ...style
      }}
    />
  )
}