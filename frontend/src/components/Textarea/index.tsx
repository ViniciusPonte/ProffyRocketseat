import React, { TextareaHTMLAttributes } from "react";

import { TextAreaMU } from "./styles";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

const TextArea: React.FC<TextAreaProps> = ({ name, label, ...rest }) => {
  return (
    <TextAreaMU className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </TextAreaMU>
  );
};

export default TextArea;
