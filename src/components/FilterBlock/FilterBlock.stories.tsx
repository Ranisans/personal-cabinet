import React from "react";

import FilterBlock from "./index";

export default {
  title: "Filter Block",
  component: FilterBlock,
};

export const Base: React.FC = () => {
  const [filter, setFilter] = React.useState("");
  const filterCallback = (value: string): void => {
    setFilter(value);
    console.log(value);
  };

  return <FilterBlock defaultValue={filter} callback={filterCallback} />;
};

export const ResetValue: React.FC = () => {
  const [filter, setFilter] = React.useState("press enter and...");
  const filterCallback = (value: string): void => {
    setFilter(value);
    console.log(value);
    setTimeout(() => {
      setFilter("");
    });
  };

  return <FilterBlock defaultValue={filter} callback={filterCallback} />;
};
