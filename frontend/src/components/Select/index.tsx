import React, { SelectHTMLAttributes } from "react";

import { SelectMU } from "./styles";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => {
  return (
    <SelectMU className="select-block">
      <label htmlFor={name}>{label}</label>
      <select value="" id={name} {...rest}>
        <option value="" disabled hidden>
          Selecione uma opção
        </option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </SelectMU>
  );
};

export default Select;
