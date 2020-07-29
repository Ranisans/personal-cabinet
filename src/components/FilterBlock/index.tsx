import React, { useState, useEffect } from "react";

import "./FilterBlock.scss";

export interface FCProps {
  defaultValue: string;
  callback: (filter: string) => void;
}

const FilterBlock: React.FC<FCProps> = ({
  defaultValue,
  callback,
}: FCProps) => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const onSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      callback(value);
    }
  };

  return (
    <div className="filter_block">
      <label className="filter_block-label">Filter: </label>
      <input
        type="text"
        value={value}
        className="filter_block-input"
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
        onKeyPress={onSubmit}
      />
    </div>
  );
};

export default FilterBlock;
