import { InputHTMLAttributes } from "react";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = ({ label, error, type, ...rest }: iInputProps) => (
  <div>
    <label>{label}</label>
    <input type={type} {...rest} />
    {error && <p>{error}</p>}
  </div>
);
