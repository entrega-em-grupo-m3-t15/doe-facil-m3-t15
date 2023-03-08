import { InputHTMLAttributes, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | undefined;
  register: UseFormRegisterReturn;
}

export const Input = ({
  label,
  type,
  error,
  register,
  ...rest
}: iInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPassword ? "text" : type;

  return (
    <>
      <label>{label}</label>
      <input type={inputType} {...register} {...rest} />
      {/* {type === "password" && (
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
        </button>
      )} */}
      {error ? <p>{error}</p> : null}
    </>
  );
};
