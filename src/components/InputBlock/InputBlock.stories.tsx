import React from "react";

import InputBlock from ".";

export default {
  title: "Input Block",
  component: InputBlock,
};

export const Default: React.FC = () => {
  const [value, setValue] = React.useState<string>("");

  return (
    <div style={{ width: "100px" }}>
      <InputBlock
        label="test"
        className="testClass"
        value={value}
        placeholder="placeholder"
        callback={setValue}
      />
    </div>
  );
};
