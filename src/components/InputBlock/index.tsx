import React from "react";

import "./InputBlock.scss";

export interface IBProps {
  className: string;
  label: string;
  value: string;
  callback: (value: string) => void;
}

const InputBlock: React.FC<IBProps> = ({
  className,
  label,
  value,
  callback,
}: IBProps) => (
  <div className={`input_block ${className}`}>
    <label className="input_block-label">{label}</label>
    <input
      type="text"
      value={value}
      className="input_block-input"
      onChange={(e: React.FormEvent<HTMLInputElement>): void => {
        callback(e.currentTarget.value);
      }}
    />
  </div>
);

export default InputBlock;
