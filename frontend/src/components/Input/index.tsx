import React, { InputHTMLAttributes } from "react";

import { InputMU } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <InputMU className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </InputMU>
  );
};

export default Input;
