import { InputHTMLAttributes, useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | undefined;
}

export const Input = ({ label, type, error, ...rest }: iInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPassword ? "text" : type;

  return (
    <div>
      <label>{label}</label>
      <input type={inputType} {...rest} />
      {type === "password" && (
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
        </button>
      )}
      {error ? <p>{error}</p> : null}
    </div>
  );
};
