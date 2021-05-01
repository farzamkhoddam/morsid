import React, { ChangeEvent, ReactNode } from "react";

interface Props {
  label: ReactNode;
  isSelected: boolean;
  changeHandler: (changeEvent: {
    target: {
      name: any;
    };
  }) => void;
  name: string;
}
const Checkbox = ({ name, label, isSelected, changeHandler }: Props) => (
  <div className="form-check">
    <label>
      <input
        type="checkbox"
        name={name}
        checked={isSelected}
        onChange={changeHandler}
        className="form-check-input"
      />
      {label}
    </label>
  </div>
);

export default Checkbox;
