import React from "react";

import "./InputBlock.scss";

export interface IBProps {
  className: string;
  label: string;
  value: string;
  placeholder: string;
  callback: (value: string) => void;
}

const InputBlock: React.FC<IBProps> = ({
  className,
  label,
  value,
  placeholder,
  callback,
}: IBProps) => (
  <div className={`input_block ${className}`}>
    <label className="input_block-label">{label}</label>
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      className="input_block-input"
      onChange={(e: React.FormEvent<HTMLInputElement>): void => {
        callback(e.currentTarget.value);
      }}
    />
  </div>
);

export default InputBlock;
