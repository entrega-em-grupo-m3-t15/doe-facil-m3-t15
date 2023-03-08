import { forwardRef } from "react";


type IInputProps = {
  label: string;
  type: string;
  errorParagraph: string;
};

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, type, errorParagraph, ...rest }, ref) => (
    <div >
      <label>{label}
        <input type={type} ref={ref} {...rest}/>
      </label>
      <p>{errorParagraph}</p>
    </div>
  )
)